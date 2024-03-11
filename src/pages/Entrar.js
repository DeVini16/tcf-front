import React from 'react'
import Celular from './Celular'
import Email from './Email'
import './css/entrar.css'
import AuthFacebook from '../auth/AuthFacebook'
import AuthGoogle from '../auth/AuthGoogle'
import { gapi } from 'gapi-script'

const Entrar = () => {

  const handleEmail = () => {
    return <Email/>
  }
  const handleCelular= () => {
    return <Celular/>
  }

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "169485230618-h6rne291q5iqrn5qp2l2u3oi72t2qs3j.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <div>
      <div className='container'>
        <form action="">
        <div className='container-entrar'>

<<<<<<< HEAD
        <h1 className='h1-login'>Falta pouco para matar sua fome!</h1>
        <h2 className='h2-login'>Como deseja continuar?</h2>

        <div><AuthFacebook/></div>
        <div><AuthGoogle/></div>

        <button className='btn-celular' onClick={handleCelular}>Celular</button>
        <button className='btn-email' onClick={handleEmail}>E-mail</button>
=======
          <h1 className='h1-login'>Falta pouco para matar sua fome!</h1>
          <h2 className='h2-login'>Como deseja continuar?</h2>
>>>>>>> e1468274562d8e5f1b5f8fc3eec347d7ab989b31

          <button className='btn-facebook' onClick={buttonResponse}>Continuar com Facebook</button>
          <button className='btn-google' onClick={buttonResponse}>Fazer login com o Google</button>
          <div className='cel-email'>
            <button className='btn-celular' onClick={buttonResponse}>Celular</button>
            <button className='btn-email' onClick={buttonResponse}>E-mail</button>
          </div>
          <div className='linha'>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Entrar