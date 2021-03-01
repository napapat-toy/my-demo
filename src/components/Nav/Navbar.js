import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <NavbarItem item="Home" toLink="/"></NavbarItem>
                <NavbarItem item="About" toLink="/about"></NavbarItem>
                <NavbarItem item="User" toLink="/user"></NavbarItem>
                <NavbarItem item="Register" toLink="/register"></NavbarItem>
            </ul>
        </nav>
    )
}

export default Navbar;