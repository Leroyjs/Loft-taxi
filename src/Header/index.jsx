import React from 'react'
import NavList from '../NavList'
import './style.css'

function Header() {

    return ( 
        <header className="header">
            <img className="header__logo" src="logo-header.svg"></img>
            <NavList></NavList>
        </header>
    )
}

export default Header