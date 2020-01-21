import React from 'react'
import './style.css'

export default class LoginForm extends React.Component{
    handleClick = page => e => {
        const {changePage} = this.props

        changePage(page);
    }
    handleClickForm = form => e => {
        const {changeForm} = this.props

        changeForm(form);
        e.preventDefault();
    }
    render(){    
        return ( 
        <div className="login-form">
            <h2>Войти</h2>
            <span className="login-form__new">Новый пользователь? <a href="#" onClick={this.handleClickForm("reg")} className="login-form__new_blue">Зарегистрируйтесь</a></span>
            <div className="login-form__input-box">
                <span>Имя пользователя*</span>
                <input type="text"/>
            </div>
            <div className="login-form__input-box">
                <span>Имя пользователя*</span>
                <input type="text"/>
            </div>
            <button onClick={this.handleClick("map")} className="login-form__button">Войти</button>
        </div>
        )
    }
}
