import React, { useState } from 'react';

const FimCadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [erroNome, setErroNome] = useState('');

  const [cpf, setCpf] = useState('');
  const [erroCpf, setErroCpf] = useState('');

  const handleCadastro = () => {
    if (!nomeCompleto.trim()) {
      setErroNome('Nome completo é obrigatório');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nomeCompleto.trim())) {
      setErroNome('O nome completo não pode conter números');
      return;
    }
  };

  const handleName = (e) => {
    setNomeCompleto(e.target.value);
  };

  const handleCpf = (e) => {
    setCpf(e.target.value);
  }

  return (
    <div>
      <div className='container-form'>
        <h3 className='h3-form'>Cadastrar</h3>
          
        <div className='campo-nome'>
          <input
            type="text"
            name="NomeCompleto"
            id="NomeCompleto"
            placeholder='Nome Completo'
            value={nomeCompleto}
            onChange={handleName}
          />
          {erroNome && <span className="erro-msg">{erroNome}</span>}
        </div>

        <div>
          <input 
          type="number"
          name='cpf'
          id='cpf'
          placeholder='CPF'
          value={cpf}
          onChange={handleCpf}
           />
        </div>

        <div className='form-email'>
          <span>Email</span>
          <span>{}</span>
        </div>

        <p>Concordo com os &nbsp;
          <button>Termos de uso</button>&nbsp;
          e as &nbsp;
          <button>Política de privacidade</button>
        </p>

        <button onClick={handleCadastro}>Cadastrar</button>

        <div>Já tem conta? <a href="/entrar">Entrar</a></div>

      </div>
    </div>
  );
};

export default FimCadastro;
