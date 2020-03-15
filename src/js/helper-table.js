import React from 'react'


function createsRows(tableInformation, ARow, removeInformation, updateRank){
    
    if(tableInformation.length === 0){
        return null
    }

    let theRows = []
    
    for(let i = 0; i < tableInformation.length; i++){
        let id = tableInformation[i]["id"]

        theRows.push(
        <ARow 
            key = {id}
            tableInformation = {tableInformation}
            theRowNumber = {i}
            removeInformation = {removeInformation}
            updateRank = {updateRank}
        />)
    }  
    
    return theRows    
}



export {createsRows}