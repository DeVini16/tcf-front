import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useNavigate } from 'react-router-dom';

const AuthFacebook = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const failedFacebook = (error) => {
        console.log("Login Failed!", error);
    }

    const responseFacebook = (response) => {
        console.log(response);
        if (response.accessToken) {
            setUserData({
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            });
            setIsLogged(true);
        }
    }

    useEffect(() => {
        if (isLogged) {
            navigate('/celular');
        }
    }, [isLogged, navigate]);

    return (
        <div className='facebook-action'>
            {!isLogged ? (
                <FacebookLogin
                  appId='1356428798390633'
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  onFailure={failedFacebook}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className='btn-facebook'>Entrar com o Facebook</button>
                  )}
                />
            ) : (
                <div>
                    <h2>Bem-vindo, {userData.name}!</h2>
                    <p>Email: {userData.email}</p>
                    <img src={userData.picture} alt="Perfil" />
                </div>
            )}
        </div>
    );
}

export default AuthFacebook;
