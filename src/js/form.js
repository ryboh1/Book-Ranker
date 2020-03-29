//React
import React from 'react'

//Global Variables
let genres = [[0,1,2,3],["productivity", "fiction", "self-help"
            ,"biography"]]

function TextInput(props){
    return(
        <input
            className="form-control" 
            type = "text" 
            placeholder = {props.placeholder}
            onChange = {(event) => props.handleChange(event, props.formField) }
         />
    )
}

function Selection(props){

    //attemps to map over the array of genres 
    // and then returns theOptions i.e. theSelection
    let theIDs = props.theOptions[0]

    let theOptions = theIDs.map( (id) => {
        return  <option key={id}>{props.theOptions[1][id]}</option>
    })

    return (
        <select 
        className="form-control" 
        onChange={(event) => props.handleChange(event,props.formField)}>
            <option selected="true" disabled>{props.label}</option>
            {theOptions}
        </select>  
    )
}

function Form(props){

    //This form inputs data by updating the state
    return(
        <form className="form-group">

            <TextInput 
            handleChange = {props.handleChange}
            formField = "name" 
            placeholder = "Title"
            />

            <TextInput
            handleChange = {props.handleChange} 
            formField = "author"
            placeholder = "Author"
            />

            
            <Selection 
            theOptions={genres}
            handleChange = {props.handleChange}
            formField="genre"
            label = "Genre"
            />

            <input
            className="form-control" 
            type="number" max="10" min="0" 
            placeholder = "Rank from 1 - 10"
            required
            onChange = {(event) => props.handleChange(event, "rank")}
            />

            <input 
            className="form-control"
            type="reset" value="Submit" onClick = {() => props.handleSubmit()}/>
        </form>
    )
}

export default Form
