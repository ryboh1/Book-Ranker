import React from 'react'

// index js

function getsNewInformation(theKeys,theState){
    
    let newInformation = []
    for(let i = 1; i < theKeys.length; i++){
       newInformation.push(theState[theKeys[i]]) 
    }

    return newInformation
}

function createsObject(theKeys, theValues){
    
    let result = {};
    theKeys.forEach((key, i) => result[key] = theValues[i]);

    return result
}

//table
function createsRows(tableInformation, ARow){
    
    if(tableInformation.length === 0){
        return null
    }

    let theRows = []

    for(let i = 0; i < tableInformation.length; i++ ){
        let theID = tableInformation[i]["id"]

        theRows.push(
        <ARow 
            key = {theID}
            tableInformation = {tableInformation}
            theID = {theID}
        />)
    }    
    
    return theRows    
}



export {getsNewInformation,createsObject,createsRows}