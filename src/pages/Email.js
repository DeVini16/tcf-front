import React, { useState } from 'react';
import './css/email.css';

const Email = () => {
  // State para armazenar o valor do e-mail
  const [email, setEmail] = useState('');
  // State para armazenar o valor do código
  const [code, setCode] = useState('');
  // State para verificar se o formulário foi enviado
  const [submitted, setSubmitted] = useState(false);
  // State para verificar se o e-mail é válido
  const [emailValid, setEmailValid] = useState(true);

  // Função para envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica se o e-mail é válido
    if (!isValidEmail(email)) {
      setEmailValid(false);
      return;
    }
    // lógica para enviar o código
    console.log('Código submetido:', code);
    setSubmitted(true);
  };

  // Função para validar o formato do e-mail
  const isValidEmail = (email) => {
    // validação do formato do e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <html className='image_email'>
      <body>
    <div className='container-email'>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label className='font-email' htmlFor="email">Informe o seu e-mail para continuar</label>
          <br></br>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // Ao modificar o e-mail, redefine o status de validade
              setEmailValid(true);
            }}
            required
          />
          {!emailValid && <p style={{ color: 'red' }}>E-mail Inválido</p>}
          <br></br><br>
          </br>
          <button className = "button-email" type="submit">Continuar</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <p style={{fontFamily:"revert", fontSize: '18px'}}>Digite o código de 6 dígitos que enviamos para {email}</p>
          <br>
          </br>
          <div className="code-input">
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <div className="fake-input">
              {[0, 0, 0, 0, 0, 0].map((_, index) => (
                <span key={index}>{code[index] || ''}</span>
              ))}
            </div>
          </div>
          <br></br>
          <button className ="button-email" type="submit">Continuar</button>
          <br></br>
          <br></br>
          <button className ="button-email2">Não recebi meu código</button>
        </form>
      )}
    </div>
    </body>
    </html>
  );
};

export default Email;
