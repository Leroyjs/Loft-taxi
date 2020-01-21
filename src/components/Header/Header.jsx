import React, {Component} from 'react'
import NavList from '../NavList'
import './style.css'

class Header extends Component {
    render(){
        const {page, changePage} = this.props;
        return ( 
            page !== 'login'&&<header className="header">
                <img alt="Logo" className="header__logo" src="./logo-header.svg"></img>
                <NavList changePage={changePage}></NavList>
            </header>
        )
    }
}

export default Header