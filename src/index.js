import React from 'react'
import ReactDOM from 'react-dom'

const theRoot = document.getElementById("root")

class App extends React.Component{

    render(){
        return(
            <div>Hey</div>
        )
    }
}

ReactDOM.render(<App />,theRoot)