import React, { Component } from 'react'

class Table extends Component {
    render() {
        const { table } = this.props;
        
        return (
            
                <div className="card w-100">
                    <div className="card-header">
                        <h4 className="card-title text-center">{table.title}</h4>
                    </div>
                    <p>Стан: {table.status}</p>
                    <p>Кількість гостей: {table.guests}</p>
                    <p>Офіціант: {table.waiter}</p>
                    <p>Стан замовлення: {table.order_status}</p>
                    <p>Зроблене замовлення: {table.order}</p>
                    <p>Сума замовлення: {table.order_price}</p>
                    <div className="card-footer">
                        <section>
                            {table.status=="Вільний" ?  <button className="btn btn-primary" style={{margin:'2px'}}>Забронювати</button> :null}
                            {table.status=="Вільний" ?  <button className="btn btn-primary"style={{margin:'2px'}}>Зайняти</button> :null}
                            {table.status=="Заброньований" ?  <button className="btn btn-primary"style={{margin:'2px'}}>Скасувати бронь</button>:null}
                            {table.status=="Заброньований" ?  <button className="btn btn-primary"style={{margin:'2px'}}>Зайняти</button>:null}
                            {table.status=="Зайнятий" ?  <button className="btn btn-primary"style={{margin:'2px'}}>Звільнити</button>:null}
                        </section>
                    </div>
                </div>
          
        )
    }
}
export default Table