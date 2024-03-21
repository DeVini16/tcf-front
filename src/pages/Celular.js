import React, { useState } from 'react';
import './css/cel.css'

const Celular = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [countryCode, setCountryCode] = useState('+55');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhoneNumber(formattedPhoneNumber);
    setIsPhoneNumberValid(formattedPhoneNumber.length === 15); // formatação: (XX) XXXXX-XXXX
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSendCode = () => {
    if (isPhoneNumberValid) {
      // Lógica para enviar o código por SMS
      // Chama uma função que simula o envio do código
      console.log('Enviando código por SMS para:', phoneNumber);
      setStep(2);
    } else {
      alert('Por favor, insira um número de telefone válido.');
    }
  };

  const handleVerifyCode = () => {
    // Adiciona a lógica para verificar o código
    // Compara o código inserido com um código pré-definido
    console.log('Verificando código:', code);
    // Verifica se o código está correto
    setStep(3);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <html className='image_back'>
      <body>
      <div>
        <img className='icon' src='\img\logo-red.jpg'></img>
      </div>
    <div className='container-cel'>
      {step === 1 && (
        <div className='font-cel'>
          <p>Informe o número do seu celular para continuar</p>
          <div className='form-cel'>
            <select value={countryCode} onChange={handleCountryCodeChange}>
              <option className='btn-br' value="+55">+55 (Brasil)</option>
              {/* Adicionar outras opções de países*/}
            </select>
            <input className='btn-numero'
            type="tel" placeholder="(XX) XXXXX-XXXX"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ borderColor: isPhoneNumberValid ? '' : 'red' }}
          />
          </div>
          <br></br>
          
          {!isPhoneNumberValid && <p style={{ color: 'red' }}>Número de celular inválido</p>}
          <br></br>
          <button className='button-send' onClick={handleSendCode} disabled={!isPhoneNumberValid}>Enviar</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>Digite o código de 6 dígitos que enviamos por SMS para o <br>
          </br>{phoneNumber}</p>
          <input
            type="text"
            maxLength="1"
            value={code[0] || ''}
            onChange={handleCodeChange}
          />
          <input
            type="text"
            maxLength="1"
            value={code[1] || ''}
            onChange={handleCodeChange}
          />
          <input
            type="text"
            maxLength="1"
            value={code[2] || ''}
            onChange={handleCodeChange}
          />
          <input
            type="text"
            maxLength="1"
            value={code[3] || ''}
            onChange={handleCodeChange}
          />
          <input
            type="text"
            maxLength="1"
            value={code[4] || ''}
            onChange={handleCodeChange}
          />
          <input
            type="text"
            maxLength="1"
            value={code[5] || ''}
            onChange={handleCodeChange}
          />
          <button className ='confirm-button-cel' onClick={handleVerifyCode}>Continuar</button>
          <button className ='button-forget'>Não recebi meu código</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>Parabéns! Você foi verificado.</p>
        </div>
      )}
    </div>
    </body>
    </html>
  );
};

export default Celular;
