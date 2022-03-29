import React from 'react';
import './index.css'
import { FaSistrix } from 'react-icons/fa';

function TodoSearch({search, setSearching}){
  const onSearchValueChange = (event) => {
    setSearching(event.target.value);
  }

  return(
    <div className="searchbar">
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        value={search}
      />
      <div className="searchIcon-container">
        <FaSistrix />
      </div>
    </div>
  );
}

export { TodoSearch };