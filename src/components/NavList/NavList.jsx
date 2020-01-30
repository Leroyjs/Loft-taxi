import React, {Component} from 'react'
import './style.css'
import PropTypes from 'prop-types'
import {AuthConsumer} from '../../contexts/Auth'

const navLinks = [
    {id:'map', title:'Карта'},
    {id:'profile', title:'Профиль'},
    {id:'login', title:'Выйти'},
];

class NavList extends Component {
    
    static propTypes = {
        changePage: PropTypes.func.isRequired,
    }

    handleClick = page => e => {
        const {changePage} = this.props

        changePage(page);
        e.preventDefault()
    }
    
    render(){

        return ( 
            <AuthConsumer>
            {(authContext) =>{
                return (
                    <nav>
                        <ul>
                            <li key={'map'}><a onClick={this.handleClick('map')} href="#">{'Карта'}</a></li>
                            <li key={'profile'}><a onClick={this.handleClick('profile')} href="#">{'Профиль'}</a></li>
                            <li key={'login'}><a onClick={authContext.logout} href="#" >{'Выйти'}</a></li>
                        </ul>
                    </nav>
                 )
                }}
            </AuthConsumer>
        )
    }

}

export default NavList