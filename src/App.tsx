import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ textAlign: "center", color: "white" }}>
          Небольшое руководство по взаимодействию с React Hook Form
        </h3>
        <button style={{ width: "100px", margin: "0 auto" }}>
          <Link to="/start">Начать</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
