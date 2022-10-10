
import React, { useState, useEffect } from "react";

import "./styles.css";


const data = [
    {
      id: "1",
      name: "cargo",
      type: "transport",
      emoji: "🐶",
      keywords: ["transport", "uber", "cargo"]
    },
    {
      id: "2",
      name: "automotive",
      type: "automotive",
      emoji: "🐱",
      keywords: ["automotive", "repair","mechanic"]
    },
    {
      id: "3",
      name: "foxy",
      type: "fox",
      emoji: "🦊",
      keywords: ["fox", "inteligent"]
    },
    { id: "4", name: "sushi", type: "fish", emoji: "🐟", keywords: [] }
  ];


function SearchService() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = e => setSearchTerm(e.target.value);
  
    useEffect(() => {
      const results = data.filter(o => o.keywords.includes(searchTerm));
      setSearchResults(results);
    }, [searchTerm]);
  return (
    <div class="input-group">



      <input class="form-control"  placeholder="search"
      value={searchTerm}
      onChange={handleChange}
      
      type="text"/>


      <span class="input-group-text btn btn-primary"><i class="fe fe-search"></i>Search</span>

     

      
 
      
      <div className="results">
       
        <ul class="list-group">

        {searchResults &&
            searchResults.map(item =>
                                            
                                            <li key={item.id}>
                                            {item.name}
                                            </li>)}
                                        </ul>
      </div>

  
    
    
    </div>
  )
}

export default SearchService