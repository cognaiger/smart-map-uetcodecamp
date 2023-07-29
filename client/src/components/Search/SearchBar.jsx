import React, { useState } from "react";
import "./SearchBar.css";
import { Search } from "@mui/icons-material";
import { LocationOnOutlined } from "@mui/icons-material";
import axios from 'axios'
function SearchBar({ selectedPosition, setSelectedPosition,ResetCenterView }) {

  const [wordEntered, setWordEntered] = useState("");

  const BuildingApi = "localhost:8000"

  const [listResult, setListResult] = useState([]);
  
  const [showListResult,setShowListResult] = useState(false);
  

  return (
    <div className="search" style={{ zIndex: 1200 }} onClick={(e)=>e.stopPropagation()} >
      <div className="searchInputs">
        <input
          type="text"

          value={wordEntered}
          onChange={(e) => {
            setWordEntered(e.target.value)
          }

          }
        />
        <div className="searchIcon">
          <button onClick={() => {

            const params ={
              name : wordEntered
            }
              const queryString = new URLSearchParams(params).toString();
              console.log(queryString)
      
            axios.get(`http://${BuildingApi}/search/?${queryString}`)
            .then(result => {
              
              setShowListResult(true)
              setListResult(result.data)
            })
          }}>

            <Search />
          </button>

        </div>
      </div>
      <div>
        <div className="dataResult">
          {showListResult &&  listResult.map(item => {
            return (
              

              <a href="#" key={item?._id} className="dataItem" onClick={()=>{
                setShowListResult(false)
                setSelectedPosition(item)
            
                
                }} >
                <LocationOnOutlined sx={{ color: "#e50027" }} />
                <p>{item?.display_name} </p>
              </a>
              
            )
          })}

          
        </div>
      </div>
    </div>


  );
}

export default SearchBar;