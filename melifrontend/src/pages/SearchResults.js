import React, {useContext } from 'react'
import CardItem from '../components/ui/CardItem';
import { QueryContext } from '../hooks/QueryContext';
import "../styles/SearchResults.scss"
import useFetch from '../hooks/useFetch';

function SearchResults() {
  const {query} = useContext(QueryContext);
  
  const [items] = useFetch(process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_BACKEND_SEARCH + query);
  
  return (
    <div>
      <div className='main-container'>
      {items && !items.error ? items.items.map((el,index) => {
        return(
        <CardItem key={index} itemProps={el}/>
        )
      }) : (<span>Loading ...</span>)}
      </div>
    </div>
  )
}

export default SearchResults