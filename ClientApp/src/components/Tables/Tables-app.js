import React from 'react'


import TableList from './TableList'
import tables from './Tables-sources/Tables-data'
import 'bootstrap/dist/css/bootstrap.css'

function TablesApp() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-2">Столики в кафе</h1>
            </div>
            <TableList tables={tables} />
        </div>
    )
}

export default TablesApp