import React from 'react'
import desktop from '../../../assets/971.jpg'

const Hero = () => {
  return (
      <div 
      style={{
        backgroundImage: `url(${desktop})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "500px",
        height: "400px" 
      }}
    >
      <img src={desktop} alt="yuxdutfditi" style={{ width: '100%', height: 'auto' }} />
    </div>
  )
}

export default Hero
