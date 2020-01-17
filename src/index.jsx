import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Main from './Main'

let page ="map";

function App() {
    return ( 
        <div>
            <Header></Header>
            <Main page={page}></Main>
        </div >
    )
}

render( < App / > , document.querySelector('#root'));