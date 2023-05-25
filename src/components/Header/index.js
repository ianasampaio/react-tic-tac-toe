import React from 'react'
import './styles.css'
import About from'../../objects/About';
import Logo from'../../objects/Logo';
import Menu from'../../objects/Menu';  

const Header = () => (
    <header className='header'>
        <Logo/>
        <About/>
        <Menu/>
    </header>
);

export default Header;