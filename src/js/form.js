//React
import React from 'react'

//Global Variables
let genres = [[0,1,2,3],["productivity", "fiction", "self-help"
            ,"biography"]]

function TextInput(props){
    return(
        <input />
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
        <select>
            {theOptions}
        </select>  
    )
}

function Form(props){

    return(
        <form action="">
            <label>Book Name:</label>
            <TextInput />
            <label>Author:</label>
            <TextInput />
            <label>Genres:</label>
            <Selection theOptions={genres}/>
            <label>Rank:</label>
            <input type="number" max="10" min="0"/>
        </form>
    )
}

export default Form;
