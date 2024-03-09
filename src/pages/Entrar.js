import React from 'react'

import './css/entrar.css'

const Entrar = () => {

  const buttonResponse = (e) => {
    e.preventDefault()

    return console.log('muito bom')
  }

  // const loginGoogle = () => {
  //   return 1
  // }
  // const loginFacebook = () => {
  //   return 2
  // }

  return (
    <div>
      <form action="">
      <div className='container-entrar'>

        <h1 className='h1-login'>Falta pouco para matar sua fome!</h1>
        <h2 className='h2-login'>Como deseja continuar?</h2>

        <button className='btn-facebook' onClick={buttonResponse}>Continuar com Facebook</button>
        <button className='btn-google' onClick={buttonResponse}>Fazer login com o Google</button>

        <button className='btn-celular' onClick={buttonResponse}>Celular</button>
        <button className='btn-email' onClick={buttonResponse}>E-mail</button>

      </div>
      </form>
    </div>
  )
}

export default Entrar