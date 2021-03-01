import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarItem(props) {

    // console.log(props);

    return (
        <li id={props.item}>
            <Link to={props.toLink}>{props.item}</Link>
        </li>
    )
}

export default NavbarItem;