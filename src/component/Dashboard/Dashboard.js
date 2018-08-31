import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
    console.log(id)
      axios.delete(`/api/product/${id + 1}`)
      .then(() => this.props.mount())
    }

    render() {
        const inventoryArr = this.props.list.map((product, index) => {
            return (
                <Product
                delete={this.deleteProduct}
                key={index}
                index={index}
                name={product.product_name}
                price={product.produce_price}
                image={product.image_url}
                />
            )
        })
        return (
            <div className='master_container'>
                {inventoryArr}
            </div>
        )
    }
}

export default Dashboard