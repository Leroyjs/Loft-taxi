import React, {Component} from 'react'
import Header from '../Header'
import Main from '../Main'
import {AuthProvider}  from '../../contexts/Auth.jsx'

export default class App extends Component{
    state = {
        page:'map'
    }
    changePageHandler = (page) =>{
        this.setState({
            page
        })
    }

    render(){
        const {page} = this.state;

        return ( 
            <AuthProvider>
                <Header changePage={this.changePageHandler}></Header>
                <Main page={page}  changePage={this.changePageHandler}></Main>
            </AuthProvider>
        )
    }
}