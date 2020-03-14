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

function TableRows(props){
    
    //create an array of rows, then order that
    // array of rows by rating 
        
    return(
        <div>
        
        </div>
    )
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
                <TableRows 
                tableInformation = {props.tableInformation} 
                tableIDs = {props.tableIDs}/>            
            </tbody>

        </table>
    )
}

export default Table