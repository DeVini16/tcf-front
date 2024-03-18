import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const AuthGoogle = () => {
    const navigator = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [googleId, setGoogleId] = useState()
    const [isLogged, setIsLogged] = useState(false)

    const responseGoogle = (response) => {
        console.log(response)

        const { profileObj : {name, email, googleId} } = response;
        setName(name);
        setEmail(email);
        setGoogleId(googleId);
        setIsLogged(true);
    }

    const failedGoogle = (error) => {
        console.log("Failed to login!", error)
    }

    useEffect(() => {
        if (isLogged) {
            navigator('/celular')
        }
    }, [isLogged, navigator])

    return (
        <GoogleLogin
          clientId='169485230618-h6rne291q5iqrn5qp2l2u3oi72t2qs3j.apps.googleusercontent.com'
          buttonText='Fazer login com o Google'
          onSuccess={responseGoogle}
          onFailure={failedGoogle}
          cookiePolicy={'single_host_origin'}
          className="btn-google-custom"
        />
      );
    };

export default AuthGoogle
