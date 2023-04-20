import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
        <div>
            <a href="/" style={{marginRight:"10px"}}>Home</a>
            <a href="/about" style={{marginRight:"10px"}}>About</a>
            <a href="/episodes" style={{marginRight:"10px"}}>Episodes</a>
        </div>    
        <div className="theme-button">Dark Mode</div>
    </div>
  )
}

export default Header