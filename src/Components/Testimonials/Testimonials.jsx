import React from 'react'
import './Testimonials.css'
import '../responsive.css'
import testimonials from '../../assets/testimonials.png'
import pic from '../../assets/pic.png'


const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='testimonials'>
            <img src={testimonials}/>
        </div>
        <div className='reviewcard-row'>
            <div className='reviewcard-col1'>
                <div className='cardrow1'>
                    <div className='cardcol1'><img src={pic}/></div>
                    <div className='cardcol2'>
                        <h6>Courtney Henry</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='cardcol2stars'>                   
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
                <div className='cardrow1'>
                    <div className='cardcol1'><img src={pic}/></div>
                    <div className='cardcol2'>
                        <h6>Courtney Henry</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='cardcol2stars'>                   
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reviewcard-col2'>
            <div className='cardrow1'>
                    <div className='cardcol1'><img src={pic}/></div>
                    <div className='cardcol2'>
                        <h6>Courtney Henry</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='cardcol2stars'>                   
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
                <div className='cardrow1'>
                    <div className='cardcol1'><img src={pic}/></div>
                    <div className='cardcol2'>
                        <h6>Courtney Henry</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='cardcol2stars'>                   
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
