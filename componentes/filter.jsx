

const filter = () => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                  <select>
                    <option value="All">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                  </select>
            </div>
        </div>
        <p>Ordem alfabética:</p>
        <button>ASC</button>
        <button>DSC</button>
    </div>
  )
}

export default filter