import React from 'react';

const GiftItem = ({ gift }) => {
  const { id, item, price, link, picture } = gift;
  return (
    <div className='card'>
      <img src={picture} />
      <div className='card-container'>
        <h3>{item}</h3>
        <span>${price}</span>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

export default GiftItem;
