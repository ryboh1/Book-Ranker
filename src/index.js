import React from 'react'
import ReactDOM from 'react-dom'

//Component Modules
import Form from "./js/form"
import Table from "./js/table"

//Modules
import {getsNewInformation, createsObject} from "./js/helpers"

//CSS
import "./css/index.css"
import "./css/bootstrap-4.4.1-dist/css/bootstrap.min.css"

const theRoot = document.getElementById("root")

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {name:"", author:"", genre:"productivity", rank:"",
                    information:[] 
                }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event,formField)
    {
        const value = event.target.value
        this.setState(() => {
            return {[formField]:value}
        })    
    }

    handleSubmit(){
        //creates a new information object and appends it to 
        //the state.information array
        let theKeys = ["id","name", "author", "genre", "rank"]
        let newID = this.state.information.length
        let newInformation = getsNewInformation(theKeys, this.state)
        newInformation.unshift(newID)

        let newObject= createsObject(theKeys,newInformation)
        let currentInformation = this.state.information.slice()
        currentInformation.push(newObject)

        this.setState( () => {
            return {information:currentInformation}
        })
    }

    render(){
        return(
            <div>
                <Form  
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}/>

                <Table 
                tableInformation = {this.state.information}
                />
            </div>            
        )
    }
}

ReactDOM.render(<App />,theRoot)