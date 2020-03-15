//React
import React from 'react'

//Global Variables
let genres = [[0,1,2,3],["productivity", "fiction", "self-help"
            ,"biography"]]

function TextInput(props){
    return(
        <input type = "text" 
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
        onChange={(event) => props.handleChange(event,props.formField)}>
            {theOptions}
        </select>  
    )
}

function Form(props){

    //This form inputs data by updating the state
    return(
        <form>

            <label>Book Name:</label>
            <TextInput 
            handleChange = {props.handleChange}
            formField = "name" />

            <label>Author:</label>
            <TextInput
            handleChange = {props.handleChange} 
            formField = "author"/>

            <label>Genres:</label>
            <Selection 
            theOptions={genres}
            handleChange = {props.handleChange}
            formField="genre"/>

            <label>Rank:</label>
            <input type="number" max="10" min="0" required
            onChange = {(event) => props.handleChange(event, "rank")}/>

            <input type="reset" value="Submit" onClick = {() => props.handleSubmit()}/>
        </form>
    )
}

export default Form
