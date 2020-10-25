import React, { Component } from 'react';
import OrderTable from '../../components/OrderTable/OrderTable';

class Orders extends Component {
    // Id	Price	Number	Product	Status
    state = {
        orders: [
            {id: '1', price: 19.99, number: 1, product: 'Shirts', status: 'NEW'},
            {id: '2', price: 29.99, number: 1, product: 'Pants', status: 'NEW'}
        ]
    };

    render() {
        return <div id="new" className="tab-pane active">
        <div className="panel panel-info">
            <div className="panel-heading">
							        <span style={{color: 'red'}}> <strong>Orders</strong>
							        </span>
				        </div>
                        <div className="panel-body">            
            <OrderTable orders={this.state.orders}/>
            </div>
        </div>
        </div>
    }
}

export default Orders;