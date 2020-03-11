import React from 'react'

function Selection(props){

    let theOptions = props.theOptions
    
    let theSelection = theOptions.map( (i) => {
        return  <option>{props.theOptions[i]}</option>
    })

    return (
        <select name="" id="">
            {theSelection}
        </select>  
    )
}


export default Selection