import React from 'react'

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

function sortInformation(tableInformation){
    
    if(tableInformation.length === 0){
        return null
    }

    /*Sorts info by
    storing each id and rank then sorting the array based on 
    highest rank and returns the ids in sorted order*/

    let sortable = []
    for(let i = 0; i < tableInformation.length; i++){
        
        let id = tableInformation[i]["id"]
        let rating = parseInt(tableInformation[i]["rank"])
        sortable.push( [rating, id] )
    }

    sortable.sort( (a,b) =>{
        return b[0] - a[0]
    })

    let sortedOrder = []
    for(let i = 0; i < sortable.length; i++){
        sortedOrder.push(sortable[i][1])
    }

    return sortedOrder
}

function rearrangeArray(theArray, theOrder){

    let theSortedArray = []
    theOrder.map( (position) => {
        theSortedArray.push(theArray[position])
    })

    return theSortedArray
}

function updateIDs(theArray){

    for(let i = 0; i < theArray.length; i++){
        theArray[i]["id"] = i
    }

    return theArray
}

function resetOldInformation(aThis){

    aThis.setState( () => {
        return {name:"", author:"", genre:"productivity", rank:"0"}
    })
}

function updateInformation(theKeys, newID,aThis){

    let newInformation = getsNewInformation(theKeys, aThis.state)
    newInformation.unshift(newID)
    let newObject = createsObject(theKeys,newInformation)
    let currentInformation = aThis.state.information.slice()
    currentInformation.push(newObject)   
    let order = sortInformation(currentInformation)
    let sortedInformation = rearrangeArray(currentInformation, order)


    let updatedInformation = updateIDs(sortedInformation)
    resetOldInformation(aThis)
    return updatedInformation
}


export {updateInformation, updateIDs, sortInformation, rearrangeArray}