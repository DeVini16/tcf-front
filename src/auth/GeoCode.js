import React, { useState } from 'react'

const GeoCode = ({handleLocation}) => {
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
 // Aqui essa lógica faz com que o geolocation busque a latitude e longitude do usuário
  if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)

      const {coords : {latitude,longitude}} = position  
      setLatitude(latitude)
      setLongitude(longitude)

      handleLocation(latitude, longitude)
      
      }, (error)=>{console.log(error)});
  }else{
    console.log('ops, algo está errado aqui')
}
  return (
    <div>

    </div>
  )
}

export default GeoCode