import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login'

const AuthFacebook = ({response}) => {
  return (
    <div className='facebook-action'>
        <FacebookLogin
            appId='431308452902879'
            onSuccess={(response) =>{
                console.log("Login Sucess!", response);
            }}
            onFail={(error) => {
                console.log("Login Failed!", error);
            }}
        />
    </div>
  )
}

export default AuthFacebook