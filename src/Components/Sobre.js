import React from 'react'
import imgSobre from "../Assets/SobreVincc1.png";
function Sobre () {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={imgSobre} alt='' />
        </div>
        <div className='about-text'>
            <h1>SOBRE NÓS</h1>
            <p>Loren ipsum dolo sit, amet consextutetur adipisicing elit. Facere reoekkat becessitatibus Loren ipsum dolo sit, 
              amet consextutetur adipisicing elit. Facere reoekkat becessitatibus amet consextutetur adipisicing elit. Facere reoekkat becessitatibus amet consextutetur adipisicing elit. Facere reoekkat becessitatibus
              amet consextutetur adipisicing elit. Facere reoekkat becessitatibus amet consextutetur adipisicing elit. Facere reoekkat becessitatibus.</p>
            <button>Leia mais</button>
        </div>
    </div>
  )
}

export default Sobre
