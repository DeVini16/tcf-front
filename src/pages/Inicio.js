import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/inicio.css';

const Inicio = () => {
  return (
    <div className="container">
      <div className="top-right">
        <Link to="/entrar" className="button-ifood">Criar Conta</Link>
        <Link to="/entrar" className="button-ifood">Entrar</Link>
      </div>
      <div className="secao-container">
        <h2>Faça o seu mercado</h2>
        <p>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
        <form>
          <label htmlFor="endereco">Em qual endereço você está?</label>
          <input type="text" id="endereco" name="endereco" />
          <button type="submit" className="button-ifood">Ver mercados próximos</button>
        </form>
        <ul>
          <li>Frios</li>
          <li>Laticínios</li>
          <li>Feira</li>
          <li>Bebidas</li>
          <li>Doces</li>
          <li>Massas frescas</li>
          <li>Limpeza</li>
          <li>Padaria</li>
          <li>Higiene</li>
          <li>Congelados</li>
          <li>Carnes</li>
          <li>Cerveja</li>
        </ul>
      </div>
    </div>
  );
}

export default Inicio;
