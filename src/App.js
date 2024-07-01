import React, {useState} from "react";
import AllProjects from "./pages/AllProjects"
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage"
import { Route, Routes} from "react-router-dom"
import BeyondTech from "./pages/BeyondTech"
import Resume from "./pages/Resume"





function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <>
      <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    <div className="container">
      <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/allprojects" element={<AllProjects />}/>
      <Route path="/BeyondTech" element={<BeyondTech />}/>
      <Route path="/resume" element={<Resume />}/>
      </Routes>
    </div>
    
    
    </>
  );
}

export default App;