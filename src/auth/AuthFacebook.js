import React, { useEffect, useState } from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login'
import { useNavigate } from 'react-router-dom'

const AuthFacebook = () => {
    const navigator = useNavigate()
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [googleId, setGoogleId] = useState()
    const [isLogged, setIsLogged] = useState(false)


const faliedFacebook = (error) => {
  console.log("Login Failed!", error);
}

const responseFacebook = (response) => {
  console.log(response)

  // const { profileObj : {name, email, googleId} } = response;
  // setName(name);
  // setEmail(email);
  // setGoogleId(googleId);
  setIsLogged(true);
}

useEffect(() => {
  if (isLogged) {
      navigator('/celular')
  }
}, [isLogged, navigator])

  return (
    <div className='facebook-action'>
        <FacebookLogin
            appId='431308452902879'
            onSuccess={responseFacebook}
            onFail={faliedFacebook}
        />
    </div>
  )
}

export default AuthFacebook