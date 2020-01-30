import React from 'react'
import './style.css'
import PropTypes from 'prop-types'
import {AuthConsumer} from '../../contexts/Auth'

class LoginForm extends React.Component{
    static propTypes = {
        changeForm: PropTypes.func.isRequired,
    }
    state = {
        email:'',
        password:'',
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleClickForm = form => e => {
        e.preventDefault();

        const {changeForm} = this.props

        changeForm(form);
    }
    render(){ 
        return ( 
            <AuthConsumer>
                {(authContext) =>{
                    return (
                        <div className="login-form">
                            <h2>Войти</h2>
                            <span className="login-form__new">Новый пользователь? <a href="#" onClick={this.handleClickForm("reg")} className="login-form__new_blue">Зарегистрируйтесь</a></span>
                            <div className="login-form__input-box">
                                <span>Имя пользователя*</span>
                                <input value={this.state.email} name={'email'} onChange={this.handleChange} type="text"/>
                            </div>
                            <div className="login-form__input-box">
                                <span>Пароль*</span>
                                <input value={this.state.password} name={'password'} onChange={this.handleChange} type="text"/>
                            </div>
                            <button onClick={() => authContext.login(this.state.email, this.state.password)} className="login-form__button">Войти</button>
                        </div>
                    )
                }}
            </AuthConsumer>
        )
    }
}

export default LoginForm