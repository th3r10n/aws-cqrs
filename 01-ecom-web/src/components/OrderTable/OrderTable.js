import React from 'react';
import OrderRow from './OrderRow/OrderRow';

const orderTable = (props) => {
    // Id	Price	Number	Product	Status
    const orders = props.orders.map( (order, index) => {
        return <OrderRow order={order} key={index}/>
    }

    );
    return (
        <table className="table table-striped table table-sm">
           <thead>
									<tr>
										<th>Id</th>
										<th>Price</th>
										<th>Number</th>
										<th>Product</th>
                                        <th>Status</th>
									</tr>
								</thead>
                                <tbody>
            {orders}
            </tbody>
        </table>
    );
}

export default orderTable;