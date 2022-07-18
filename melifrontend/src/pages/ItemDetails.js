import React  from 'react'
import { useParams } from 'react-router-dom'
import ItemBuyInfo from '../components/common/ItemBuyInfo';
import Descripcion from '../components/common/Descripcion';
import useFetch from '../hooks/useFetch';
import "../styles/ItemDetails.scss"

function ItemDetails() {
    const { id } = useParams();
    
    const [items] = useFetch(process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_BACKEND_ITEM + id);
    
  if(items){
    return (
      <div className='item-Details'>
        <div className='item-Details__img-price'>
          <img src={items.picture} alt="item"/>
          <ItemBuyInfo items={items}/>
        </div>
        <Descripcion text={items.description}/>
      </div>
    )
  } else {
    return <div className='item-Details'>
        <span>Loading...</span>
      </div>
  }
    
  
  
   
}

export default ItemDetails