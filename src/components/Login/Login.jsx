import React from 'react'
import LoginForm from '../LoginForm'
import RegForm from '../RegForm'
import './style.css'

export default class Login extends React.Component{
    state = {
        form:'log'
    }
    changeFormHandler = (form) =>{
        this.setState({
            form
        })
    }
    render(){        
        return ( 
        <div className="login">
            <div className="login__logo-box">
              <img src="login-logo.svg" alt="Logo" className="login__logo"/>
            </div>
            {this.state.form === 'log'?<LoginForm changeForm={this.changeFormHandler}></LoginForm>:<RegForm  changeForm={this.changeFormHandler}></RegForm>}
        </div>
    )
    }
}

