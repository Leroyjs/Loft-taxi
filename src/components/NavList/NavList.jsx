import React, {Component} from 'react'
import './style.css'

const navLinks = [
    {id:'map', title:'Карта'},
    {id:'profile', title:'Профиль'},
    {id:'login', title:'Выйти'},
];

class NavList extends Component {
    handleClick = page => e => {
        const {changePage} = this.props

        changePage(page);
        e.preventDefault()
    }
    render(){

        return ( 
            <nav>
                <ul>
                    {
                        navLinks.map(nav => (
                        <li key={nav.id}><a onClick={this.handleClick(nav.id)} href="#">{nav.title}</a></li>
                        ))
                    }
                </ul>
            </nav>
        )
    }

}

export default NavList