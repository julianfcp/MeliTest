import React from 'react';
import "../../styles/common/ItemTitle.scss"

function ItemTitle({title}) {
  return (
    <span className='item-title'>{title}</span>
  )
}

export default ItemTitle