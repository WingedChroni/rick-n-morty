import React, {useContext} from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
//get access to global state


function Header() {

  //create a variable for darkmode
  // const darkMode =  true;
  // const [darkMode, setdarkMode] = React.useState(false);

  //now use global state
  //NOTE {} curly brackets not [] square brackets
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?`header-container header-dark`: `header-container`}>
        <div>
            {/* Similar to a tag but doesn't refresh your page */}
            <Link to="/" style={{marginRight:"10px"}}>Home</Link>
            <Link to="/about" style={{marginRight:"10px"}}>About</Link>
            <Link to="/episodes" style={{marginRight:"10px"}}>Episodes</Link>
        </div>    
        <button className={darkMode?"theme-button theme-button-dark": "theme-button"} onClick={()=>setDarkMode(!darkMode)}>
          {
            darkMode?"Light Mode" : "Dark Mode"
          }
        
        </button>
    </div>
  )
}

export default Header