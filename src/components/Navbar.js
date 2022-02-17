import React, { useState } from 'react';
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const[showLinks, setShowLinks] = useState(false);
  function Click(){
    setShowLinks(!showLinks);
  }
  return (
    <div className="navbar">
      <div className="leftside" id={showLinks ? "open" : "close"} >
        <img src={logo} />

        <div className="hiddenLinks">
          <Link to="/">
            Home
          </Link>

          <Link to="/menu">
            Menu
          </Link>

          <Link to="/menu">
            About
          </Link>

          <Link to="/menu">
            Contact
          </Link>
        </div>

      </div>

      <div className="rightside">
        <Link to="/">
          Home
        </Link>

        <Link to="/menu">
          Menu
        </Link>

        <Link to="/">
          About
        </Link>

        <Link to="/">
          Contact
        </Link>

        <button onClick={Click}>
          <ReorderIcon />
        </button>
      </div>



    </div>
  )
}

export default Navbar