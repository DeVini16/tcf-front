import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/inicio.css';

const Inicio = () => {
  return (
    <html className='background-center'>
      <body>
    <div className="container-home">
    <br></br>
    <br></br>
    <br></br>
    <div className="headliner">
    <img className='icon' src='\img\logo-red.jpg'></img>
    <h1 className='title'>ToCom.Fome</h1>
        <Link to="/entrar" className="button-ifood" style={{height: '20px'}}>Criar Conta</Link>
        <Link to="/entrar" className="button-ifood"style={{height: '20px'}}>Entrar</Link>
      </div>
      </div>
      <div className="container-middle">
        <h2>Faça o seu mercado</h2>
        <p className='font-text'>Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza</p>
        <form>
        <input className ="search"placeholder='Em qual endereço você está? '></input>
          <button type="submit" className="button-ifood">Ver mercados próximos</button>
        </form>
        <ul className="container-center">
          <button className="container-market">Frios</button>
          <button className="container-market">Laticínios</button>
          <button className="container-market">Feira</button>
          <button className="container-market">Bebidas</button>
          <button className="container-market">Doces</button>
          <button className="container-market">Massas frescas</button>
          <button className="container-market">Limpeza</button>
          <button className="container-market">Padaria</button>
          <button className="container-market">Higiene</button>
          <button className="container-market">Congelados</button>
          <button className="container-market">Carnes</button>
          <button className="container-market">Cerveja</button>
        </ul>
      </div>
    </body>
    </html>
  );
}

export default Inicio;
