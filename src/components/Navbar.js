import React, {useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Navbar.css'
import { Button } from '@mui/material';


const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false)

  function toggelNavbar(){
    setOpenLinks(!openLinks)
  };
  
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src = {Logo} alt='logo'/>
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
      <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Button onClick={toggelNavbar}>
            <MenuIcon />
          </Button>
      </div>
    </div>
  )
}

export default Navbar
