import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('english')

  let languages = ['english', 'spanish', 'french', 'german', 'japanese', 'korean'];

  const checkSearch = (str) => {
    let valid = false;

    if (languages.includes(str.toLowerCase())) {
      valid = true;
    }

    if (!valid) {
      alert('Must Contain Valid Language')
    } else {
      setSearchLanguage(searchInput);
    }
  }

  return (
    <div className="search-bar-container">
      <input id="search-bar" className="search-bar" placeholder="Search Language..." type="text"
        onChange={(e) => setSearchInput(e.target.value)}></input>
      <button id="search-button" className="search-button" onClick={(e) => { checkSearch(searchInput) }}><SearchIcon /></button>
    </div>
  )
}