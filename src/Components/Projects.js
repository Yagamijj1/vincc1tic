import React from 'react';


function Projects(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>

    </div>
  )
}

export default Projects