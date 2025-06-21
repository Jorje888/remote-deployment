import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import "./App.css";


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
      <h1>Echo</h1>
      <div className="card">
        <Link to="/answer">
          <button>Go to Answer</button>
        </Link>
      </div>
      <p className="read-the-docs">
        I may look like a default vite application but I am in fact Echo.
      </p>
    </>
  );
}

export default App;
