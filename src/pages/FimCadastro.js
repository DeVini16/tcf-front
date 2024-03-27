import React, { useState } from "react";
import './css/fimcadastro.css'
// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

const FimCadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [erroNome, setErroNome] = useState("");

  const [cpf, setCpf] = useState("");
  const [erroCpf, setErroCpf] = useState("");

  const handleCadastro = () => {
    if (!nomeCompleto.trim()) {
      setErroNome("Nome completo é obrigatório");
      return;
    }

    if (!cpf.trim()) {
      setErroCpf("CPF é obrigatório");
      return;
    }

    if (!validarCPF(cpf)) {
      setErroCpf("CPF inválido");
      return;
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[0-9]/g, "");
    setNomeCompleto(value);
    setErroNome("");
  };

  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.substr(0, 11);
    }

    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setCpf(value);
    setErroCpf("");
  };

  return (
    <div className="container">
      <div>
        <img alt='Logo' className='icon' src='\img\logo-red.jpg'></img>
      </div>
      <div className="container-form">
        <h3 className="h3-form">Cadastrar</h3>

        <div className="campo-nome">
          <input
            type="text"
            name="NomeCompleto"
            id="NomeCompleto"
            placeholder="Nome Completo"
            value={nomeCompleto}
            onChange={handleNameChange}
          />
          {erroNome && <span className="erro-msg">{erroNome}</span>}
        </div>

        <div className="campo-cpf">
          <input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={handleCpfChange}
          />
          {erroCpf && <span className="erro-msg">{erroCpf}</span>}
        </div>

        <div className="form-email">
          <span>Email</span>
          <span>{}</span>
        </div>

        <p className="paragrafo">
          Concordo com os &nbsp;
          <button className="t">Termos de uso</button>&nbsp; e as &nbsp;
          <button className="p">Política de privacidade</button>
        </p>
        
        <button className="btn-cadastrar" onClick={handleCadastro}>Cadastrar</button>
        
        <div>
          <h4>Já tem conta? <a className="e" href="/entrar">Entrar</a></h4>
        </div>
      </div>
    </div>
  );
};

export default FimCadastro;
