import React from 'react'
import ReactDOM from 'react-dom'

//Component Modules
import Form from "./js/form"
import Table from "./js/table"

//Javascript Modules
import {updateInformation, updateIDs, sortInformation, rearrangeArray} from "./js/helpers"

//CSS
import "./css/style.css"
import "./css/bootstrap-4.4.1-dist/css/bootstrap.min.css"

const theRoot = document.getElementById("root")

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {name:"", author:"", genre:"productivity", rank:"0",
                    information:[] 
                }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeInformation = this.removeInformation.bind(this)
        this.updateRank = this.updateRank.bind(this)
    }

    handleChange(event,formField)
    {
        const value = event.target.value
        this.setState(() => {
            return {[formField]:value}
        })    
    }

    handleSubmit(){

        let isText = isNaN(this.state.rank)
        let rank = this.state.rank
        if(isText || rank < 0 || rank > 10 ){
            return alert("You Have Entered Your Rank Incorrectly ")
        }

        let theKeys = ["id","name", "author", "genre", "rank"]
        let newID = this.state.information.length
       
        let updatedInformation = updateInformation(theKeys, newID, this)

        this.setState( () => {
            return {information:updatedInformation}
        })
    }

    removeInformation(rowNumber){
        let currentInformation = this.state.information.slice()       
        currentInformation.splice(rowNumber, 1) 
        currentInformation = updateIDs(currentInformation)

        this.setState( () => {
            return { information: currentInformation}
        })
        
    }

    updateRank(theEvent, rowNumber){
        let sign = theEvent.target.innerHTML
        let theInformation = this.state.information.slice()
        let currentRank = theInformation[rowNumber]["rank"]
        
        if(sign === "+"){
           sign = 1 
        }
        else{
            sign = -1
        }

        let updatedRank = sign + parseInt(currentRank)    
       
        if(updatedRank > 10 || updatedRank < 0){
            return
        }

        theInformation[rowNumber]["rank"] = updatedRank
        let sortedArray = sortInformation(theInformation)
        let sortedInformation = rearrangeArray(theInformation,sortedArray)
        let finalInformation = updateIDs(sortedInformation)

        this.setState( (previousState) => {
            return {information:finalInformation}
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 form">
                        <h3 id="title">To Read List</h3>
                        <Form  
                            handleChange = {this.handleChange}
                            handleSubmit = {this.handleSubmit}/>
                    </div>
                    <div className="col-md-7 table">
                        <Table 
                            tableInformation = {this.state.information}
                            removeInformation = {this.removeInformation}
                            updateRank = {this.updateRank}
                    />
                    </div>
                </div>
            </div>            
        )
    }
}

ReactDOM.render(<App />,theRoot)