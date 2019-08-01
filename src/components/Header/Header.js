import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/' className='Header-Logo'>Star Wars</Link>
      <nav className='Header-Nav'>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Personajes</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  ) 
}

export default Header