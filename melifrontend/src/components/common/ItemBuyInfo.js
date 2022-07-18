import React from 'react';
import "../../styles/common/ItemBuyInfo.scss"

function ItemBuyInfo(props) {
  return (
    <div className='item-info'>
        <span className='item-info__condition'>{props.items.condition} - {props.items.sold_quantity} vendidos</span>
        <span className='item-info__title'>{props.items.item.title}</span>
        <span className='item-info__price'>$ {parseFloat(props.items.item.price.amount).toLocaleString('en')}</span>
        <button>Comprar</button>
    </div>
  )
}

export default ItemBuyInfo