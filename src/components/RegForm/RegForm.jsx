import React from 'react'
import './style.css'

export default class RegForm extends React.Component{
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
        <div className="reg-form">
            <h2>Регистрация</h2>
            <span className="reg-form__new">Уже зарегистрирован?<a href="#" onClick={this.handleClickForm("log")}  className="reg-form__new_blue">Войти</a></span>
            <div className="reg-form__input-box">
                <span>Адрес электронной почты</span>
                <input type="text"/>
            </div>
            <div className="reg-form__double-input-box">
                <div className="reg-form__input-box reg-form__input-box_half">
                    <span>Имя</span>
                    <input type="text"/>
                </div>
                <div className="reg-form__input-box reg-form__input-box_half">
                    <span>Фамилия</span>
                    <input type="text"/>
                </div>
            </div>            
            <div className="reg-form__input-box">
                <span>Пароль</span>
                <input type="text"/>
            </div>
            <button onClick={this.handleClick("map")} className="reg-form__button">Зарегистрироваться</button>
        </div>
        )
    }
}