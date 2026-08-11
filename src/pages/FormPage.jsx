import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage({
  setAlunos,
  setProfessores,
  setCoordenadores,
  setDiretor
}) {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  function salvarAluno() {
    if (nome.trim() === '') {
      alert('Digite um nome.');
      return;
    }

    setAlunos((lista) => [...lista, nome]);
    setNome('');
    navigate('/alunos');
  }

  function salvarProfessor() {
    if (nome.trim() === '') {
      alert('Digite um nome.');
      return;
    }

    setProfessores((lista) => [...lista, nome]);
    setNome('');
    navigate('/professores');
  }

  function salvarCoordenador() {
    if (nome.trim() === '') {
      alert('Digite um nome.');
      return;
    }

    setCoordenadores((lista) => [...lista, nome]);
    setNome('');
    navigate('/coordenadores');
  }

  function salvarDiretor() {
    if (nome.trim() === '') {
      alert('Digite um nome.');
      return;
    }

    setDiretor((lista) => [...lista, nome]);
    setNome('');
    navigate('/diretor');
  }

  return (
    <div className="container mt-5">
      <h1>Cadastro</h1>

      <div className="mb-3">
        <label className="form-label">
          Nome
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="d-flex gap-2 flex-wrap">
        <button
          className="btn btn-primary"
          onClick={salvarAluno}
        >
          Salvar Aluno
        </button>

        <button
          className="btn btn-success"
          onClick={salvarProfessor}
        >
          Salvar Professor
        </button>

        <button
          className="btn btn-warning"
          onClick={salvarCoordenador}
        >
          Salvar Coordenador
        </button>

        <button
          className="btn btn-danger"
          onClick={salvarDiretor}
        >
          Salvar Diretor
        </button>
      </div>
    </div>
  );
}

export default FormPage;