import React from 'react'

import {createsRows,sortRows} from "./helpers"

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
            <td>{theInformation[theID].name}</td>
            <td>{theInformation[theID].author}</td>
            <td>{theInformation[theID].genre}</td>
            <td>
                {theInformation[theID].rank}
            </td>
        </tr>
    )
}

function TheRows(props){

    let theRows = createsRows(props.tableInformation,ARow)      
    return theRows
}

function Table(props){
    return(
        <table id="myTable">
            <thead>
                <tr>
                    <TableHead tableColumns={tableColumns}/>
                </tr>
            </thead>

            <tbody>
                <TheRows 
                tableInformation = {props.tableInformation}/>
            </tbody>

        </table>
    )
}

export default Table