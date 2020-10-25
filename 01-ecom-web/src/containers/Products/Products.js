import React, { Component } from 'react';
import ProductTable from '../../components/ProductTable/ProductTable';

class Products extends Component {

    state = {
        products: [
          { id: '1', price: 100 , stock: 4, description: 'Shirts' },
          { id: '2', price: 100 , stock: 4, description: 'Pants' }
        ]
    }

    render() {
        return <div id="new" className="tab-pane active">
        <div className="panel panel-info">
            <div className="panel-heading">
							        <span style={{color: 'red'}}> <strong>Products</strong>
							        </span>
				        </div>
                        <div className="panel-body">            
            <ProductTable products={this.state.products}/>
            </div>
        </div>
        </div>
    }
}

export default Products;