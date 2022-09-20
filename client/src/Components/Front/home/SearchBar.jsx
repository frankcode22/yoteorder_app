import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
   
    <div className="search">
      <div className="searchInputs">


    
      <div class="form-group">
     
          <input class="form-control" placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter} type="text"/>
          
      </div>

      

      
        <div className="searhIcon">
          {filteredData.length === 0 ? (
            <hr></hr>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" onClick={() => {
                setWordEntered(value.title)
                setFilteredData([]);
              }} href="#">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
   
  );
}

export default SearchBar;
