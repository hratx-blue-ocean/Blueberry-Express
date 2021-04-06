import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar" placeholder="Search Language..." type="text"></input>
      <button className="search-button"><SearchIcon/></button>
    </div>
  )
}