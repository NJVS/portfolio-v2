import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import About from "pages/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
