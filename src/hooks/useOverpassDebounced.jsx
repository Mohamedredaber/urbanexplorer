import { useState, useEffect, useRef } from 'react';

// Simple in-memory cache
const cache = new Map();

export default function useOverpassDebounced(initialQuery = null, delay = 700) {
  const [query, setQuery] = useState(initialQuery);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      setLoading(false);
      return;
    }

    if (cache.has(query)) {
      setData(cache.get(query));
      return;
    }

    setLoading(true);
    setError(null);

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      try {
        const res = await fetch('https://overpass-api.de/api/interpreter', {
          method: 'POST',
          headers: { 'Content-Type':'application/x-www-form-urlencoded' },
          body: 'data=' + encodeURIComponent(query)
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        cache.set(query, json);
        setData(json);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [query, delay]);

  return { data, loading, error, setQuery };
}
