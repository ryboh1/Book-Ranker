import React from 'react'
import ReactDOM from 'react-dom'

//Modules
import Form from "./js/form"
import Table from "./js/table"

//CSS
import "./css/index.css"
import "./css/bootstrap-4.4.1-dist/css/bootstrap.min.css"

//testing module
import Selection from "./js/test"

const theRoot = document.getElementById("root")

class App extends React.Component{
    render(){
        return(
            <div>
                <Form />
                <Table />
            </div>
            
        )
    }
}

ReactDOM.render(<Form />,theRoot)