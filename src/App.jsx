import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import About from "pages/About/About";
import Contacts from "pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
