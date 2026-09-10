import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import About from "pages/About/About";
import Contacts from "pages/Contacts/Contacts";
import AIAssistant from "components/AIAssistant/AIAssistant";

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
        <Route path="/about" element={<About />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <AIAssistant />
    </>
  );
}

export default App;
