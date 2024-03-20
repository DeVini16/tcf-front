import React, { useState } from 'react';
import './css/popup.css';
import GeoCode from '../auth/GeoCode';

const PopUp = ({ isOpen }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleLocation = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <div>
      <h1>revisar</h1>
      {isOpen ? (
        <div className='bg-modal'>
          <GeoCode handleLocation={handleLocation} />
          <div className='container-modal'>
            <h3>Buscar meu endereço</h3>
            <div>
              <button onClick={() => handleLocation(latitude, longitude)}>Buscar minha localização atual</button>
            </div>
          </div>
          {latitude && longitude && (
            <p>Latitude: {latitude}, Longitude: {longitude}</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default PopUp;