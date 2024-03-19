import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Celular from '../pages/Celular';
import Codigo from '../pages/Codigo';
import CriaProduto from '../pages/CriaProduto';
import CriaRestaurante from '../pages/CriaRestaurante';
import Email from '../pages/Email';
import FimCadastro from '../pages/FimCadastro';
import Produtos from '../pages/Produtos';
import Restaurantes from '../pages/Restaurantes';
import PopUp from '../pages/PopUp';
import Entrar from '../pages/Entrar';


const Router = () => {

  return (
    <div className=''>
      <Routes>
            <Route
              path="/"
              element={<Inicio/>}
            />
            <Route
              path="/celular"  
              element={<Celular/>}
            />
            <Route
              path="/codigo"
              element={<Codigo/>}
            />
            <Route
              path="/criaProduto"
              element={<CriaProduto />}
            />
            <Route
              path="/criaRestaurante"
              element={<CriaRestaurante />}
            />
            <Route
              path="/email"
              element={<Email/>}
            />
            <Route
              path="/entrar"
              element={<Entrar/>}
            />
            <Route
              path="/fimcadastro"
              element={<FimCadastro />}
            />
            <Route
              path="/popup"
              element={<PopUp />}
            />
            <Route
              path="/produtos"
              element={<Produtos />}
            />
            <Route
              path="/restaurantes"
              element={<Restaurantes />}
            />
      </Routes>
    </div>
  );
}

export default Router;