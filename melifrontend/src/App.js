import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ItemDetails from "./pages/ItemDetails";
import SearchBar from "./components/ui/SearchBar";
import SearchResults from "./pages/SearchResults";
import { QueryContext } from "./hooks/QueryContext";
import BreadCrumbs from "./components/ui/BreadCrumbs";

function App() {
  const [query, setQuery] = useState('')

  useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      setQuery(urlParams.get('search'));    
  }, [])

  return (
    <Router>
      <div className="App">
        <QueryContext.Provider value={{query, setQuery}}>
        <SearchBar />
        <BreadCrumbs className='breadcrumbs'/>
        <Routes>
          <Route exact path="/" element={""}/>
          <Route path="/items" element={<SearchResults />}/>
          <Route path="/item/:id" element={<ItemDetails />}/>
        </Routes>
        </QueryContext.Provider>
      </div>
    </Router>
  );
}

export default App;
 