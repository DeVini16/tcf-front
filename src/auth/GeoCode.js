import React, { useState } from 'react';
import '../pages/css/geocode.css';
const GeoCode = () => {
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleLocationButtonClick = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    const { coords: { latitude, longitude } } = position;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log('Ops, algo está errado aqui');
        }
    };

    return (
        <div className="geo-code-container">
            <button onClick={handleLocationButtonClick}>Obter Localização</button>
            <h3>Latitude: {latitude}</h3>
            <h3>Longitude: {longitude}</h3>
        </div>
    );
};

export default GeoCode;
