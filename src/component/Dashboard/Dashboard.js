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

    componentDidMount() {
        axios.get('/api/inventory')
        .then(response => this.setState({inventory: response.data}))
      }

    deleteProduct(id) {
    console.log(id)
      axios.delete(`/api/product/${id}`)
      .then(() => this.props.mount())
    }

    render() {
        console.log("EDITING",this.props.editing)
        const inventoryArr = this.props.list.map((product, index) => {
            return (
                <Product
                editor={this.props.editor}
                editing={this.props.editing}
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