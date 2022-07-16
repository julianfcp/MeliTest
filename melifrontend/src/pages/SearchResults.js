import React, { useState, useEffect, useContext} from 'react'
import CardItem from '../components/ui/CardItem';
import { QueryContext } from '../hooks/QueryContext';
import "../styles/SearchResults.scss"
//import useFetch from '../hooks/useFetch';

function SearchResults() {
  /* const urlParams = new URLSearchParams(window.location.search);
  const query2 = urlParams.get('search')
  const [items] = useFetch(`http://localhost:3001/api/items/query/${query2}`) */
  const {query} = useContext(QueryContext);
  const [items, setItems] = useState({items: []})

  useEffect(() => {
    fetch(`http://localhost:3001/api/items/query/${query}`)
          .then((res) => res.json())
          .then((data) => {setItems(data); console.log(data)})
          .catch((err) => console.log(err));
          
  }, [query])
  

  return (
    <div>

    <div className='main-container'>
    {items && !items.error ? items.items.map((el,index) => {
      return(
       <CardItem key={index} itemProps={el}/>
      )
    }) : (
        <h2>Not Found!</h2>
    ) }
    </div>


    </div>
  )
}

export default SearchResults