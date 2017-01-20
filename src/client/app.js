import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MyComp extends Component {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

ReactDOM.render(
    <MyComp/>,
    document.getElementById('root')
)
