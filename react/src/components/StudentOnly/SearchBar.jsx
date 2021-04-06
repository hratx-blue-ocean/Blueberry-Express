import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
  return (
    <div>
      <input className="w-72 border border-black rounded-xl text-center"  type="text"></input>
      <button><SearchIcon /></button>
    </div>
  )
}