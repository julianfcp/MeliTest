import React from 'react';
import "../../styles/common/ItemPrice.scss"

function ItemPrice({price}) {
  return (
    <span className='item-price'>$ {price}</span>
  )
}

export default ItemPrice