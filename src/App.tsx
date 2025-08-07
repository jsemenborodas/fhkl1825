import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
