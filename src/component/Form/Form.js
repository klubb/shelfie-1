import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
import notFound from './no-image.jpg'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            name: '',
            editing: false,
            item: []
        }
        this.handleIMG = this.handleIMG.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.cancleInput = this.cancleInput.bind(this)
        this.addInventory = this.addInventory.bind(this)
    }


    handleIMG(e) {
        this.setState({ image: e.target.value })
    }

    handleName(e) {
        this.setState({ name: e.target.value })
    }

    handlePrice(e) {
        this.setState({ price: e.target.value })
    }

    cancleInput() {
        this.setState({ image: '', name: '', price: '' })
    }

    addInventory() {
        axios.post('/api/product', { name: this.state.name, price: this.state.price, image: this.state.image })
            .then(() => {
                this.props.mount()
                this.cancleInput()
            })
    }

    componentDidUpdate(old) {

    }

    render() {
        let picture = null
        if (this.state.image) {
            picture = this.state.image
        }
        else {
            picture = notFound
        }
        if (this.props.editor) {
            return (
                    <div className='form_container'>
                        <div className='image_box'>
                            <img src={picture} alt=""/>
                        </div>
                        <div className='input_container'>
                        <h1>Image URL:</h1>
                        <input value={this.state.image} onChange={this.handleIMG} type="text" className='input1'/>
                        <h1>Product Name:</h1>
                        <input value={this.state.name}onChange={this.handleName} type="text"/>
                        <h1>Price:</h1>
                        <input value={this.state.price}onChange={this.handlePrice} type="text"/>
                        </div>
                        <div className='button_container'>
                        <button className='right' onClick={this.addInventory}>Save</button>
                        <button className='left' onClick={this.cancleInput} >Cancel</button>
                        </div>
                    </div>
                )
        }
        else {
            return (
                <div className='form_container'>
                    <div className='image_box'>
                        <img src={picture} alt="" />
                    </div>
                    <div className='input_container'>
                        <h1>Image URL:</h1>
                        <input value={this.state.image} onChange={this.handleIMG} type="text" className='input1' />
                        <h1>Product Name:</h1>
                        <input value={this.state.name} onChange={this.handleName} type="text" />
                        <h1>Price:</h1>
                        <input value={this.state.price} onChange={this.handlePrice} type="text" />
                    </div>
                    <div className='button_container'>
                        <button className='right' onClick={this.addInventory} >Add to Inventory</button>
                        <button className='left' onClick={this.cancleInput} >Cancel</button>
                    </div>
                </div>
            )
        }
    }
}

export default Form