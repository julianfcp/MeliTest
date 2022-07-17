import React from 'react';
import "../../styles/common/ItemPrice.scss"
import LinkItem from './LinkItem';
import ic_shipping from  "../../assets/ic_shipping.png"

function ItemPrice({price, id, free_shipping}) {

  return (
    <span className='item-price'>
      <LinkItem id={id} label={`$ ${parseFloat(price).toLocaleString('en')}`}/>
      {free_shipping ? <img src={ic_shipping} alt="free_shipping"/> : ""}
    </span>
  )
}

export default ItemPrice