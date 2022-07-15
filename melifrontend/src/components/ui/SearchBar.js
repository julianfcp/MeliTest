import React, { useState, useContext } from 'react';
import { QueryContext } from '../../hooks/QueryContext';
import { Link, useNavigate } from "react-router-dom"
import ic_Search from "../../assets/ic_Search.png"
import Logo_ML from  "../../assets/Logo_ML.png"
import '../../styles/SearchBar.scss';


function SearchBar() {
    let navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState ("");
    const {setQuery} = useContext(QueryContext);
    
    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(searchQuery);
        navigate(`items?search=${searchQuery}`)
    }



    return (
        <header className='nav-search'>
            <div className='nav-search__container'>
                <Link to="/" className='nav-search__logo'>
                    <img alt='logo' src={Logo_ML}  />
                </Link>
                <form className='nav-search__form' onSubmit={handleSearch}>
                    <input className='nav-search__input' type="text" onChange={(e)=> setSearchQuery(e.target.value)} aria-label="search" placeholder="Nunca dejes de buscar" />
                    <button className='nav-search__button' >
                        <img alt='search' src={ic_Search} />
                    </button>
                </form>
                
            </div>
        </header>
    )
}

export default SearchBar