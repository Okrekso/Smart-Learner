import React from 'react'
import Table from './Table'

export default function TableList ({tables}) {
    const tableElements= tables.map(table => <div key={table.id} className="col-sm-6 col-md-6" style={{padding:'15px'}}> <Table table={table}/></div>)
    return (
        <div className="row">
             {tableElements}
        </div>
    )
}