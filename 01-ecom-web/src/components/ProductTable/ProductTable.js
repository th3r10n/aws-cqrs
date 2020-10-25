import React from 'react';
import ProductRow from './ProductRow/ProductRow';

const productTable = (props) => {
    const products = props.products.map( (product,index) => {
        return <ProductRow product={product} key={index}/>
    });
    return (
       <table className="table table-striped table table-sm">
           <thead>
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>stock</th>
									</tr>
								</thead>
                                <tbody>
            {products}
            </tbody>
        </table>
    );
}

export default productTable;