import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <h2>Pagina Para calculo de remuneracion</h2>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-6 d-flex flex-column align-items-center">
            <h3>datos sueldo bruto</h3>
            <div className="mb-3 mt-3 text-start w-75">
              <label htmlFor="sueldoBruto" className="form-label">Ingrese sueldo bruto</label>
              <input id="sueldoBruto" type="number" className="form-control" placeholder="Ingrese sueldo bruto" />
            </div>
          </div>

          <div className="col-6 d-flex flex-column align-items-center">
            <h3>resultados</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
