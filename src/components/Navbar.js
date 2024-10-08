import {Link, useNavigate} from "react-router-dom"
import './Navbar.css'; 
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');  // Navigate to the home page
      setTimeout(() => {
        const homeElement = document.getElementById(id);
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
        }, 100);
      }
    };
    
    return (
      <nav className ="nav">
         <Link to="/" className="navbar_txt ">Home</Link>
      
        <ul className='navbar-options'>
          {/*turn into toggle graphic in the future*/}
        <button className="navbar_btn toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Inverted' : 'Regular'}
        </button>
        <Link to="/allprojects" className='navbar_txt'>All Projects</Link>

        <button className='navbar_scroll_btn' onClick={() => scrollToSection('experience')}>
          Experience
        </button>
        {/*<Link to="/beyondtech" className='navbar_txt'>Beyond Tech</Link>*/}
        <a className="navbar_txt" href="https://www.youtube.com/@vivsvibes">Beyond Tech</a>
        <a className="navbar_txt mailto" href="mailto:tranviviana@berkeley.edu">Contact</a>
        <button className='navbar_btn'>
          <Link to="/resume" className="navbar_txt">Resume</Link>
        </button>
       
        </ul>
      </nav>
)}
export default Navbar;
