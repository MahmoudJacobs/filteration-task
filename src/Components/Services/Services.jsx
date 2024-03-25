import React from 'react'
import './Services.css'
import services from '../../assets/services.png' 
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.jpg'

const Services = () => {
  return (
    <div className='services-container'>
      <div className='titleshape'>
        <img src={services}/>
      </div>
      <div className='cards'>
        <div className="card" style={{
           width: '100%', borderRadius: '25px', boxShadow: '0px 3px 34px -9px rgba(0,0,0,0.30)',  bottom: '50px', marginBottom: '25px'
           
           }}>
          <img className="card-img-top" src={card1} alt="Card image cap" style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px'}} />
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily: "Poppins", color: "#324473", fontWeight: "bold"}}>Lorem Ipsum</h5>
            <p className="card-text" style={{fontFamily: "Poppins", color: "#324473"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
        </div>
        <div className="card" style={{
           width: '100%', borderRadius: '25px', boxShadow: '0px 3px 34px -9px rgba(0,0,0,0.30)',  bottom: "50px", marginBottom: '25px'
           }}>
          <img className="card-img-top" src={card2} alt="Card image cap" style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px'}} />
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily: "Poppins", color: "#324473", fontWeight: "bold"}}>Lorem Ipsum</h5>
            <p className="card-text" style={{fontFamily: "Poppins", color: "#324473"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
        </div>
        <div className="card" style={{
           width: '100%', borderRadius: '25px', boxShadow: '0px 3px 34px -9px rgba(0,0,0,0.30)',  bottom: "50px", marginBottom: '25px'
           }}>
          <img className="card-img-top" src={card3} alt="Card image cap" style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px'}} />
          <div className="card-body">
            <h5 className="card-title" style={{fontFamily: "Poppins", color: "#324473", fontWeight: "bold"}}>Lorem Ipsum</h5>
            <p className="card-text" style={{fontFamily: "Poppins", color: "#324473"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
        </div>
      </div>   
      <button className='servicesbtn'>Help me</button>
    </div>
  )
}

export default Services
