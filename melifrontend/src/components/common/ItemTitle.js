import React from 'react';
import LinkItem from './LinkItem';
import "../../styles/common/ItemTitle.scss"

function ItemTitle({title, id}) {
  return (
    <span className='item-title'><LinkItem id={id} label={title}/></span>
  )
}

export default ItemTitle