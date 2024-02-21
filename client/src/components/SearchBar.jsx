import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = ({handleSearch}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch prop with the current query
    handleSearch(query);
  };

  return (
    <div>
      <form className='w-[500px] relative'>
        <div className="relative">
            <input type="search" placeholder='Type Here' className='w-full p-4 rounded-full bg-slate-800 text-white'value={query} onChange={(e) =>{handleInputChange(e)}}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full' onClick={handleSearchSubmit}>
                <AiOutlineSearch />
            </button>
        </div>
        </form>
    </div>
  );
};

export default SearchBar;