import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <div className="title">
            相片圖庫
          </div>
          <div className="search">
            <input className="input" onChange={inputHandler} type="text" />
            <button onClick={search}>搜尋</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Search;
