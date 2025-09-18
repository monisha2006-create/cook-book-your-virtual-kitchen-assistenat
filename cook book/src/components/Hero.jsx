import React from 'react'
import '../styles/Hero.css'
import heroImg1 from '../images/chicken.png1.jpg'
import heroImg2 from '../images/pizza.png2.jpg'
import heroImg3 from '../images/noodles.png3.jpg'
import heroImg4 from '../images/kathi roll.png4.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text">
              <div className="hero-line" />
              <h1>Cook simple,Eat Special....</h1>
              <p>cook smarter,Eat Better,Live Happier.</p>
              <a href="#recipies"><button>Recipies</button></a>
        </div>
        <div className="hero-images">
            <span className='span1'>
              <img src={heroImg2} alt="" />
              <img src={heroImg4} alt="" />
            </span>
            <span className='span2'>
              <img src={heroImg3} alt="" />
              <img src={heroImg1} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Hero