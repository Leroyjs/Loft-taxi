import React, {Component} from 'react'
import Header from '../Header'
import Main from '../Main'

export default class App extends Component{
    state = {
        page:'login'
    }
    changePageHandler = (page) =>{
        this.setState({
            page
        })
    }

    render(){
        const {page} = this.state;

        return ( 
            <div>
                <Header page={page} changePage={this.changePageHandler}></Header>
                <Main page={page}  changePage={this.changePageHandler}></Main>
            </div >
        )
    }
}