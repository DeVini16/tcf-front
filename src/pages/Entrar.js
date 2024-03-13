import React, { useEffect } from 'react'
import './css/entrar.css'
import AuthFacebook from '../auth/AuthFacebook'
import AuthGoogle from '../auth/AuthGoogle'
import { gapi } from 'gapi-script'
import { useNavigate } from 'react-router-dom'

const Entrar = () => {
  const navigator = useNavigate()

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId:
          "169485230618-h6rne291q5iqrn5qp2l2u3oi72t2qs3j.apps.googleusercontent.com",
        plugin_name: "chat",
      });
    });
  }, [])

  return (
    <body className='container'>
          <div className='container-entrar'>
            <h1 className='h1-login'>Falta pouco para matar sua fome!</h1>
            <h2 className='h2-login'>Como deseja continuar?</h2>
            <div className='btn-facebook'><AuthFacebook/></div>
            <div><AuthGoogle/></div>
            <div className='cel-email'>
              <button className='btn-celular' onClick={() => navigator('/celular')}>Celular</button>
              <button className='btn-email' onClick={() => navigator('/email')}>E-mail</button>
            </div>
            <div className='linha'></div>
          </div>
    </body>
  )
}

export default Entrar