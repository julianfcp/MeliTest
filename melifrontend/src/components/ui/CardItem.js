import React from 'react';
import "../../styles/CardItem.scss"
import ItemPrice from '../common/ItemPrice';
import ItemTitle from '../common/ItemTitle';
import ItemLocation from '../common/ItemLocation';

function CardItem(props) { 
  const {price, title, thumbnail} = props.itemProps;
  return (
    <div className="card-item">
      <img className="card-item__img" src={thumbnail} alt="item"/>
      <div className='card-item__price-title'>
        <ItemPrice price={price}/>
        <ItemTitle title={title} />
      </div>
      <div>
        <ItemLocation />
      </div>
    </div>
  )
}

export default CardItem;