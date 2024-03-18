import React, { useState } from 'react'

const GeoCode = () => {
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
 // Aqui essa lógica faz com que o geolocation busque a latitude e longitude do usuário
  if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)

      const {coords : {latitude,longitude}} = position  
      setLatitude(latitude)
      setLongitude(longitude)
      
      }, (error)=>{console.log(error)});
  }else{
    console.log('ops, algo está errado aqui')
}
  return (
    <div>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
    </div>
  )
}

export default GeoCode