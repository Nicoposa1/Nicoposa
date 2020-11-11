import React from 'react';
import './style.css'

const Card = ({ children, title }) => (
  <div className='Card'>
    <img src={children} alt=""/>
    <h3 className='categories__title'>{title}</h3>
  </div>
)

export default Card;
