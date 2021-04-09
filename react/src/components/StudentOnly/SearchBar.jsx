import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = ({ languages }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('english')
  const [isValid, setIsValid] = useState(true);

  let langArray = ['english', 'spanish', 'french', 'german', 'japanese', 'korean'];

  // languages.forEach(lang => {
  //   langArray.push(lang.name)
  // })


  const checkSearch = (str) => {
   if (!langArray.includes(str.toLowerCase())) {
      setIsValid(false);
    }

    if (!valid) {
      alert('Must Contain Valid Language')
    } else {
      setSearchLanguage(searchInput);
    }
  }

  return (
    <div className="search-bar-container text-center">
      <input id="search-bar" className="search-bar" placeholder="Search Language..." type="text"
        onChange={(e) => {
          setSearchInput(e.target.value)
          setIsValid(true);
        }}></input>
      <button id="search-button" className="search-button" onClick={(e) => { checkSearch(searchInput) }}><SearchIcon /></button>

        {!isValid ? <p className="absolute top-14 left-36 text-red-500 font-bold">Not Valid Language</p> : null}
    </div>
  )
}