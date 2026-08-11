import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';

import './App.css';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [coordenadores, setCoordenadores] = useState([]);
  const [diretor, setDiretor] = useState([]);

  return (
    <HashRouter basename="/navegacao-academica">

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Cadastro Escolar
          </Link>

          <div className="d-flex gap-3">
            <Link className="nav-link text-white" to="/">
              Cadastrar
            </Link>

            <Link className="nav-link text-white" to="/alunos">
              Alunos
            </Link>

            <Link className="nav-link text-white" to="/professores">
              Professores
            </Link>

            <Link className="nav-link text-white" to="/coordenadores">
              Coordenadores
            </Link>

            <Link className="nav-link text-white" to="/diretor">
              Diretor
            </Link>
          </div>

        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={
            <FormPage
              setAlunos={setAlunos}
              setProfessores={setProfessores}
              setCoordenadores={setCoordenadores}
              setDiretor={setDiretor}
            />
          }
        />

        <Route
          path="/alunos"
          element={
            <TablePage
              titulo="Alunos"
              nomes={alunos}
            />
          }
        />

        <Route
          path="/professores"
          element={
            <TablePage
              titulo="Professores"
              nomes={professores}
            />
          }
        />

        <Route
          path="/coordenadores"
          element={
            <TablePage
              titulo="Coordenadores"
              nomes={coordenadores}
            />
          }
        />

        <Route
          path="/diretor"
          element={
            <TablePage
              titulo="Diretor"
              nomes={diretor}
            />
          }
        />

      </Routes>

    </HashRouter>
  );
}

export default App;