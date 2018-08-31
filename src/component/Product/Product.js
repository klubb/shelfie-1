import React from 'react'
import './Product.css'
import noImage from './no-image.jpg'

function Product(props) {
    let picture = null
    if (props.image.includes('//')) {
        picture = props.image
    }
    else {
        picture = noImage
    }
    if (props.editor) {
        return (
            <div className='product_container'>
                <div className='product_image'>
                    <img src={picture} alt="Product" />
                </div>
                <div className='text_box'>
                    <h1>{props.name}</h1>
                    <h2>${props.price}</h2>
                </div>
                <div className='product_buttons'>
                    <button onClick={() => props.delete(props.index)} id='product_left'>Delete</button>
                    <button onClick={() => {
                        props.edit(props.index)
                        props.editing()
                    }} id='product_right'>Save</button>
                </div>
            </div>
        )
    }
    else {
    return (
        <div className='product_container'>
            <div className='product_image'>
                <img src={picture} alt="Product" />
            </div>
            <div className='text_box'>
                <h1>{props.name}</h1>
                <h2>${props.price}</h2>
            </div>
            <div className='product_buttons'>
                <button onClick={() => props.delete(props.index)} id='product_left'>Delete</button>
                <button onClick={() => {
                    props.edit(props.index)
                    props.editing()
                }} id='product_right'>Edit</button>
            </div>
        </div>
    )
}
}

export default Product