import React, {Component} from 'react'
import NavList from '../NavList'
import './style.css'
import PropTypes from 'prop-types'
import {AuthConsumer} from '../../contexts/Auth'

class Header extends Component {
    static propTypes = {
        changePage: PropTypes.func.isRequired,
    }

    render(){
        const {changePage} = this.props;
        return ( 
            <AuthConsumer>
            {(authContext) =>{
                return (
                    authContext.isLoggedIn &&<header className="header">
                    <img alt="Logo" className="header__logo" src="./logo-header.svg"></img>
                    <NavList changePage={changePage}></NavList>
                </header>
                 )
                }}
            </AuthConsumer>
        )
    }
}

export default Header