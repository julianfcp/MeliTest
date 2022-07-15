import React, { useState, useEffect, useContext} from 'react'
import { QueryContext } from '../hooks/QueryContext';
//import useFetch from '../hooks/useFetch';

function SearchResults() {
  /* const urlParams = new URLSearchParams(window.location.search);
  const query2 = urlParams.get('search')
  const [items] = useFetch(`http://localhost:3001/api/items/query/${query2}`) */
  const {query} = useContext(QueryContext);
  const [items, setItems] = useState({items: []})

  useEffect(() => {
    console.log("cambio input: ", query)
    fetch(`http://localhost:3001/api/items/query/${query}`)
          .then((res) => res.json())
          .then((data) => setItems(data))
          .catch((err) => console.log(err));
  }, [query])
  

  return (
    <div>Results:

    {items && items.items.map((el,index) => {
      return(
        <li>{el.title}</li>
      )
    }) }


    </div>
  )
}

export default SearchResults