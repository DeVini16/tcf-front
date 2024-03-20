import React, { useState } from 'react';

const CriarRestaurante = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    celular: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    endereco: '',
    numero: '',
    complemento: ''
  });

  const [parte1Concluida, setParte1Concluida] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitParte1 = (e) => {
    e.preventDefault();
    // Validação e outras ações
    setParte1Concluida(true);
  };

  const handleSubmitParte2 = (e) => {
    e.preventDefault();
    // dados do formulário, enviar para o backend
    console.log(formData);
  };

  return (
    <div>
      {!parte1Concluida ? (
        <div>
          <h2>Cadastre sua loja</h2>
          <br></br>
          <form onSubmit={handleSubmitParte1}>
            <label>
              Nome completo:
              <input type="text" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} />
            </label>
            <br />
            <label>
              E-mail:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label>
              Celular (com DDD):
              <input type="text" name="celular" value={formData.celular} onChange={handleChange} />
            </label>
            <br />
            <br>
            </br>
            <button type="submit">Cadastrar agora</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Endereço da loja</h2>
          <form onSubmit={handleSubmitParte2}>
            <label>
              CEP:
              <input type="text" name="cep" value={formData.cep} onChange={handleChange} />
            </label>
            <br />
            <label>
              Estado (UF):
              <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
            </label>
            <br />
            <label>
              Cidade:
              <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
            </label>
            <br />
            <label>
              Bairro:
              <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} />
            </label>
            <br />
            <label>
              Endereço:
              <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
            </label>
            <br />
            <label>
              Número:
              <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
            </label>
            <br />
            <label>
              Complemento (Opcional):
              <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Continuar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CriarRestaurante;
