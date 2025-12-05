import React, { useState } from 'react';
import MapOptimized from './components/MapOptimized';

export default function App() {
  const [tag, setTag] = useState('amenity=cafe');

  return (
    <div style={{height: '100vh', display:'flex', flexDirection:'column'}}>
      <header style={{padding: '10px', background:'#222', color:'#fff'}}>
        <h2 style={{margin:0}}>Overpass Maroc — Exemple</h2>
        <div style={{marginTop:8}}>
          <label style={{marginRight:8}}>Tag (ex: amenity=cafe) :</label>
          <input value={tag} onChange={e => setTag(e.target.value)} style={{padding:6}} />
        </div>
      </header>

      <main style={{flex:1}}>
        <MapOptimized tag={tag} />
      </main>
    </div>
  );
}
