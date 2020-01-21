import React, {Component} from 'react'
import Login from '../Login'
import Map from '../Map'
import Profile from '../Profile'

class Main extends Component {
    render(){
        let body;
        switch(this.props.page) {
            case 'map': 
                body = <Map></Map>
                break;
            case 'profile': 
                body = <Profile></Profile>
                break;
            case 'login': 
                body = <Login page={this.props.page} changePage={this.props.changePage}></Login>
                break;
            default:
                body = null;
                break;
          }
        return (
            <main>
                {body}
            </main>
        )
    }
}

export default Main