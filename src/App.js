import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario'
import Home from './components/Home/Home'
import DetalhesUsuario from './components/DetalhesUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuário</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="*">
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada() {
  return <>
    <h1>404</h1>
    <p>Página não encontrada</p>
  </>
}

export default App;
