import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>     
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link href="/usuarios">Usuários cadastrados</Link>
              </li>
              <li>
                <Link href="/adicionar">Adicionar Usuário</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/usuarios">
              <Usuarios/>
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );

}

export default App;
