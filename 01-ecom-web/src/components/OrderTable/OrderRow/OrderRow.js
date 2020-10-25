import React from 'react';

const orderRow = (props) => {
    // Id	Price	Number	Product	Status
    
    return(
        <tr>
            <td>{props.order.id}</td>
            <td>{props.order.price}</td>
            <td>{props.order.number}</td>
            <td>{props.order.product}</td>
            <td>{props.order.status}</td>
        </tr>
    );
}

export default orderRow;