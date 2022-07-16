import React, { useState, useEffect, useContext} from 'react'
import CardItem from '../components/ui/CardItem';
import { QueryContext } from '../hooks/QueryContext';
import "../styles/SearchResults.scss"

function SearchResults() {
  const {query} = useContext(QueryContext);
  const [items, setItems] = useState({items: []})
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_BACKEND_SEARCH + query)
      .then((res) => res.json())
      .then((data) => {setItems(data); console.log(data)})
      .catch((err) => console.log(err));
    }
    fetchData();
          
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