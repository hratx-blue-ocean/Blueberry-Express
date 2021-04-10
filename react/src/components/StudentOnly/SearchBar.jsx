import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export const SearchBar = ({ languages, setPreferredLanguage}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('english')
  const [isValid, setIsValid] = useState(true);

  let langArray = languages.map(language => {
    return language.name.toLowerCase();
  })

  const change = (e) => {
    setSearchInput(e.target.value);
    const index = langArray.indexOf(e.target.value.toLowerCase());
    if (index !== -1) {
      setPreferredLanguage(languages[index].id);
    }
    setIsValid(true);
  }

  const submit = (e) => {
    e.preventDefault();
    const index = langArray.indexOf(searchInput);
    if (index === -1) setIsValid(false);
  }

  return (
    <div className="search-bar-container text-center">
      <form>
      <input id="search-bar" className="search-bar" placeholder="Search Language..." type="text"
        onChange={change}></input>
      <button id="search-button" className="search-button" onClick={submit}><SearchIcon /></button>
      </form>

        {!isValid ? <p className="absolute top-14 left-36 text-red-500 font-bold">Not Valid Language</p> : null}
    </div>
  )
}