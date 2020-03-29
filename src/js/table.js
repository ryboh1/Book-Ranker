import React from 'react'

import {createsRows} from "./helper-table"

let tableColumns = [
    [0,1,2,3,4], 
    ["","Name", "Author", "Genre", "Rank"]
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
    let theRowNumber = props.theRowNumber
    return(
        <tr>
            <td><button className="btn btn-danger" onClick = {() => props.removeInformation(theRowNumber)}>x</button></td>
            <td>{theInformation[theRowNumber].name}</td>
            <td>{theInformation[theRowNumber].author}</td>
            <td>{theInformation[theRowNumber].genre}</td>
            <td>
                <button className="btn btn-warning" onClick = {(event) => props.updateRank(event, theRowNumber)}>-</button>
                {theInformation[theRowNumber].rank}
                <button className="btn btn-warning" onClick = {(event) => props.updateRank(event, theRowNumber)}>+</button>
            </td>
        </tr>
    )
}

function Table(props){
    return(
        <table id="myTable" className="table-info">
            <thead>
                <tr>
                    <TableHead tableColumns={tableColumns}/>
                </tr>
            </thead>

            <tbody>
                {createsRows(
                    props.tableInformation, 
                    ARow,
                    props.removeInformation,
                    props.updateRank)}
            </tbody>

        </table>
    )
}

export default Table