import React, { useState } from "react";
import './css/criaproduto.css'

const CriaProduto = () => {
  
  const [produtoData, setProdutoData] = useState({
    idRestaurante: undefined,
    nome: "",
    descricao: "",
    valor: undefined,
  });

  const getChanges = (e) => {
    const { name, value } = e.target;
    setProdutoData({
      ...produtoData,
      [name]: value
    });
  };
  
  const sendBackend = (e) => {
    e.preventDefault();
    console.log(produtoData)
  };

  return (
    <div className="container-produto">
      <div className="form-produto">
      <h2>Crie um produto para o seu restaurante!</h2><br/>
        <label>
          ID do Restaurante:
          <input
            type="number"
            name="idRestaurante"
            value={produtoData.idRestaurante}
            required
            onChange={getChanges}
            />
            </label>
        <label>
          Nome do produto:
          <input 
            type="text" 
            name="nome" 
            value={produtoData.nome} 
            required 
            onChange={getChanges}
          />
        </label>
        <label>
          Descrição:
          <input 
            type="text" 
            name="descricao" 
            value={produtoData.descricao} 
            required 
            onChange={getChanges}
          />
        </label>
        <label>
          Valor:
          <input 
            type="number" 
            name="valor" 
            value={produtoData.valor} 
            required 
            onChange={getChanges}
          />
        </label>
        <button type="submit" onClick={sendBackend}>Criar</button>
      </div>
    </div>
  );
};

export default CriaProduto;
