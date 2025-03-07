import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GradeForm } from "./components/GradeForm";

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Calcular promedio</h1>
      <div className="card">
      </div>

      {/* Sección añadida: Calculadora de Promedio */}
      <hr />
      <GradeForm />
    </>
  );
}

export default App;
