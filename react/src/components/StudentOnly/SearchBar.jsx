import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = ({ languages, setPreferredLanguage}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('english')
  const [isValid, setIsValid] = useState('true');

  let langArray = languages.map(language => {
    return language.name.toLowerCase();
  })

  const checkSearch = (str) => {
    const index = langArray.indexOf(str.toLowerCase());
    if (index !== -1) {
      setIsValid(true);
      setPreferredLanguage(languages[index].id)
    } else {
      setIsValid(false)
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