import React from 'react'

let tableColumns = [
    [0,1,2,3,4], 
    ["Remove","Name", "Author", "Genre", "Rank"]
]

function TableHead(props){
    
    let theKeys = props.tableColumns[0]
    let theTableHeads = theKeys.map((key) => {
        return <th key={key}> {props.tableColumns[1][key]} </th> 
    })

    return theTableHeads
}

function ARow(props){
    let theInformation = props.tableInformation
    let theID = props.theID
    return(
        <tr>
            <td><button>x</button></td>
            <td>{theInformation.name[theID]}</td>
            <td>{theInformation.author[theID]}</td>
            <td>{theInformation.genre[theID]}</td>
            <td>
                <button>-</button>
                {theInformation.rank[theID]}
                <button>+</button>
            </td>
        </tr>
    )
}

function Rows(props){
    
    let theIDs = props.theIDs

    let theRows = []
    for(let i = 0; i < theIDs.length; i++ ){
        theRows.push(<ARow 
        key = {i}
        tableInformation = {props.tableInformation}
        theID = {theIDs[i]}
        /> )
    }    
    
    return theRows    
}

function Table(props){
    return(
        <table>
            <thead>
                <tr>
                    <TableHead tableColumns={tableColumns}/>
                </tr>
            </thead>

            <tbody>
                <Rows 
                tableInformation = {props.tableInformation} 
                theIDs = {props.theIDs} />            
            </tbody>

        </table>
    )
}

export default Table