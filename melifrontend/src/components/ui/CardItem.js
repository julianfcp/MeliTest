import React from 'react';
import "../../styles/CardItem.scss"
import ItemPrice from '../common/ItemPrice';
import ItemTitle from '../common/ItemTitle';
import ItemLocation from '../common/ItemLocation';

function CardItem(props) { 
  const {price, title, thumbnail, id, address, shipping} = props.itemProps;
  return (
    <div className="card-item">
      <img className="card-item__img" src={thumbnail} alt="item"/>
      <div className='card-item__price-title'>
        <ItemPrice price={price} id={id} free_shipping={shipping.free_shipping}/>
        <ItemTitle title={title} id={id}/>
      </div>
      <div>
        <ItemLocation location={address.state_name}/>
      </div>
    </div>
  )
}

export default CardItem;