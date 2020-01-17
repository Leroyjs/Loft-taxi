import React, {Component} from 'react'

class Main extends Component {
    render(){
        let body = <h1>MAP</h1>
        switch(this.props.page) {
            case 'map': 
                body = <h1>MAP</h1>
                break;
            case 'profile': 
                body = <h1>PROFILE</h1>
                break;
            case 'login': 
                body = <h1>LOGIN</h1>
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