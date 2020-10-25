import React from 'react';

const productRow = (props) => {
    return (
        <tr>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.stock}</td>
        </tr>
    );
}

export default productRow;