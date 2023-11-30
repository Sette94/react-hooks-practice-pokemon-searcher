import React from "react";

function Search({ setSearch }) {

  function searchHandler(e) {
    setSearch(e.target.value)
  }



  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={searchHandler} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
