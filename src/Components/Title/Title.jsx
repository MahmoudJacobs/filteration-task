import React from 'react'
import './Title.css'
import '../responsive.css'
import logo from '../../assets/icon1.png'

const Title = () => {
  return (
    <div className='background1'>
        <div className='titlecontent'>
            <img src={logo} alt=""/>
            <div className='titletext'>
                <h1>Round Rock</h1>
                <h6>Trash Hauling</h6>
            </div>    
        </div>
        <button className='titlebtn1'>Experts</button>
        <p className='p1'>Lorem <span>Lorem lorem</span></p>
        <p className='p2'>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the
        </p>
        <button className='titlebtn2'>Help me</button>
    </div>
  )
}

export default Title
