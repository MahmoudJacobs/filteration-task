import React from 'react'
import './About.css'
import '../responsive.css'
import img2 from '../../assets/about-img2.png'

function About() {
  return (
    <div className='about-container'>
      <>
        <div className='background2'></div>
        <div className='gradient'></div>
        <div className='curve'></div>
      </>
      <div className='about-where'>
        <div className='aboutUS'>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
          </p>
          <img src={img2}/>
        </div>
        <div className='where'>
          <h1>Where</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <button className='aboutbtn'>Help me</button>
    </div>
  )
}

export default About
