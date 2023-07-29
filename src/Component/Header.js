import React from 'react'
import logo from '../Images/1200x630wa-removebg-preview.png'
import '../CascadingStyleSheet/header.css'

const Header = () => {
  return (
     
    <div className='header'>
        <div className='header-logo'>
            <img src={logo} alt='logo_img'/>
        </div>
        <div className='header-tagline'>
            <h2>It's a delight to have <br/>you onboard</h2>
        </div>
        <div className='header-subline'>
            <h5>Help us know you better</h5>
        </div>
        <div className='header-noteline'>
            <h6>(This is how we optimize Wobot as <br/>per your bussiness needs)</h6>
        </div>
    </div>
  )
}

export default Header