import React from 'react'
import ReactDOM from 'react-dom'

//Component Modules
import Form from "./js/form"
import Table from "./js/table"

//Modules
import {assignsID, getsInformation,updatesInformationAndID} from "./js/helpers"

//CSS
import "./css/index.css"
import "./css/bootstrap-4.4.1-dist/css/bootstrap.min.css"

const theRoot = document.getElementById("root")

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {name:"", author:"", genre:"productivity", rank:"",
                    information:{id:[],name:[], author:[], genre:[], rank:[]} 
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
        let theKeys = ["name", "author", "genre", "rank"]
        let id = this.state.information.id

        let newID = assignsID(id)
        let currentIDs = this.state.information.id.slice()
        currentIDs.push(newID)
        let currentInformation = getsInformation(theKeys,this.state)        
        let newInput = [currentIDs, currentInformation]

        updatesInformationAndID(newInput,this)

        this.setState( () => {
            return {name:"", author:"", genre:"productivity", rank:"" }
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
                theIDs = {this.state.information.id}/>
            </div>            
        )
    }
}

ReactDOM.render(<App />,theRoot)