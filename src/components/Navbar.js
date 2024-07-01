import {Link} from "react-router-dom"
const Navbar = ({ darkMode, toggleDarkMode }) => {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return (<nav className ="nav">
        <ul>
        <Link to="/" className="site-title">VT</Link>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Inverted Mode' : 'Regular Mode'}
        </button>
        </ul>
        <ul>
        <Link to="/allprojects">All Projects</Link>
        <button onClick={() => scrollToSection('experience')}>Experience</button>
        <Link to="/beyondtech">Beyond Tech</Link>
        <a className="mailto" href="mailto:tranviviana@berkeley.edu">Contact</a>
        <Link to="/resume">Resume</Link>
        </ul>
    </nav>
)}
export default Navbar;
