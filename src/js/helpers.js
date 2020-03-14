function assignsID(theID){

    let theNewID

    if(theID.length === 0){
        theNewID = 0
    }
    else{
        theNewID = theID[theID.length - 1] + 1
    }

    return theNewID
}

function getsInformation(theKeys, state){
    
    let currentInformation = []
    let newInformation = []

    theKeys.map( (key) => {
        newInformation.push( state[key].slice() ) 
        currentInformation.push( state.information[key].slice() )
    })

    for(let i = 0; i < currentInformation.length; i++){
        currentInformation[i].push(newInformation[i])
    }

    return currentInformation

}

function updatesInformationAndID(theNewInput, state){

    let theCurrentIDs = theNewInput[0]
    let theCurrentInformation = theNewInput[1]

    state.setState( (previousState) => {
        return {information:{
            id:theCurrentIDs,
            name: theCurrentInformation[0],
            author:theCurrentInformation[1],
            genre:theCurrentInformation[2],
            rank:theCurrentInformation[3]
        }}
    })
}

export {assignsID, getsInformation,updatesInformationAndID }