import { useState, useEffect } from "react";
function useUserLocation() {
  const [position, setposition] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setlooding] = useState(true);
  useEffect(() => {
    if (!navigator.geolocation) {
      const editErreur = () => {
        seterror("La géolocalisation n'est pas supportée par ce navigateur");
      };
      editErreur();
      const Editlooding = () => {
        setlooding(false);
      };
      Editlooding();
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setposition({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setlooding(false);
      },
      (err) => {
        seterror(err.message);
        setlooding(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 60000,
      }
    );
  }, []);
  return {position , loading , error}
}
export default useUserLocation;
