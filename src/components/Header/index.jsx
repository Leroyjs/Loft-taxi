import React, {Component} from 'react'
import NavList from '../NavList'
import './style.css'

class Header extends Component {
    render(){
        return ( 
            this.props.page !== 'login'&&<header className="header">
                <img alt="Logo" className="header__logo" src="./logo-header.svg"></img>
                <NavList changePage={this.props.changePage}></NavList>
            </header>
        )
    }
}
// function Header({changePage}, {page}) {
//     console.log(page);
//     return ( 
//         <header className="header">
//             <img className="header__logo" src="logo-header.svg"></img>
//             <NavList changePage={changePage}></NavList>
//         </header>
//     )
// }

export default Header