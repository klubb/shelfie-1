import React from 'react'
import './Header.css'
import logo from './logo.png'

function Header (props) {
return (
    <div className='header_container'>
        <img src={logo} alt="Logo"/>
    </div>
)
}

export default Header