import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
    console.log(id)
      axios.delete(`/api/product/${id}`)
      .then(() => this.props.mount())
    }

    render() {
        const inventoryArr = this.props.list.map((product, index) => {
            return (
                <Product
                edit={this.props.edit}
                delete={this.deleteProduct}
                key={index}
                index={product.product_key}
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