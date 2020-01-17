import React, {Component} from 'react'
import './style.css'

let page ="map";

class NavList extends Component {
    render(){
        return ( 
            <nav>
                <ul>
                    <li onClick={this.map} key="map">Карта</li>
                    <li onClick={this.profile} key="profile">Профиль</li>
                    <li onClick={this.login} key="login">Выйти</li>
                </ul>
            </nav>
        )
    }
    map = () => {
        page = "map";
    }
    profile = () => {
        page = "map";
    }
    login = () => {
        page = "map";
    }
}

export default NavList