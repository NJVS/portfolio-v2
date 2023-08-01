import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import About from "pages/About/About";
import Contacts from "pages/Contacts/Contacts";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
