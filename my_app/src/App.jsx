import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./components/home";
import Projects from "./components/projects";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/Projects" element={<Projects/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
