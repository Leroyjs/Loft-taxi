import React, {Component} from 'react'
import Login from '../Login'
import Map from '../Map'
import Profile from '../Profile'
import PropTypes from 'prop-types'
import {AuthConsumer} from '../../contexts/Auth'

class Main extends Component {
    static propTypes = {
        changePage: PropTypes.func.isRequired,
        page: PropTypes.string.isRequired,
    }

    render(){
        let body;
        switch(this.props.page) {
            case 'map': 
                body = <Map></Map>
                break;
            case 'profile': 
                body = <Profile></Profile>
                break;
            default:
                body = <Map></Map>;
                break;
          }
        return (
            <AuthConsumer>
            {(authContext) =>{
                return (
                        <main>
                            {authContext.isLoggedIn ? body : <Login></Login> }
                        </main>
                    )
                }}
            </AuthConsumer>
        )
    }
}

export default Main