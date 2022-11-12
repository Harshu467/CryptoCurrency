import React, { useContext, useState } from "react";
import debounce from "lodash.debounce";
import SearchImg from "../assets/search-icon.svg";
import { CryptoContext } from "../contexts/CryptoContext";
const Search = () => {
  const [search, setsearch] = useState("");
  let {getSearchResult} = useContext(CryptoContext);
  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000)
  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setsearch(query);
    debounceFunc(query);
  };
  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          type="text"
          onChange={handleInput}
          value={search}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          placeholder="Search Here"
          name="Search"
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img className="w-full h-auto" src={SearchImg} alt="Search" />
        </button>
      </form>
      {
        search.length > 0 ? 
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          
        </ul>
        : null
      }
    </>
  );
};

export default Search;
