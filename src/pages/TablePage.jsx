function TablePage({ titulo, nomes }) {
  return (
    <div className="container mt-5">
      <h1>{titulo}</h1>

      <table className="table table-striped table-hover mt-4">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {nomes.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center">
                Nenhum cadastro encontrado.
              </td>
            </tr>
          ) : (
            nomes.map((nome, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{nome}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;