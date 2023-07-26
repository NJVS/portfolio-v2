import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
