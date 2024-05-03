import React from "react";

function Search() {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="link"></i>
    </div>
  );
}

export default Search;