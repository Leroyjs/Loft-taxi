import React, {Component} from 'react'
import './style.css'


class NavList extends Component {
    handleClick = page => e => {
        const {changePage} = this.props

        changePage(page);
    }
    render(){

        return ( 
            <nav>
                <ul>
                    <li onClick={this.handleClick("map")} key="map">Карта</li>
                    <li onClick={this.handleClick("profile")} key="profile">Профиль</li>
                    <li onClick={this.handleClick("login")} key="login">Выйти</li>
                </ul>
            </nav>
        )
    }

}

export default NavList