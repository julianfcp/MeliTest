import React from 'react';
import "../../styles/common/ItemBuyInfo.scss"

function ItemBuyInfo(props) {
  return (
    <div className='item-info'>
        <span>{props.items.item.price.amount}</span>
    </div>
  )
}

export default ItemBuyInfo