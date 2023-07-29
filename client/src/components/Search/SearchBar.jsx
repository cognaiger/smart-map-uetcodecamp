import React, { useState } from "react";
import "./SearchBar.css";
import { Search } from "@mui/icons-material";
import { Close, LocationOnOutlined } from "@mui/icons-material";
import axios from 'axios'
function SearchBar({ selectedPosition, setSelectedPosition,ResetCenterView }) {

  const [wordEntered, setWordEntered] = useState("");
  const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search?"



  const [listResult, setListResult] = useState([]);


  return (
    <div className="search" style={{ zIndex: 1200 }} onClick={(e)=>e.stopPropagation()}>
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
            const params = {
              q: wordEntered,
              format: 'json',
              addressdetails: 1,
              polygon_geojson: 0,
              viewbox:"105.766914,21.000740,105.8135162,105.8135162",
              bounded:1
            }
            const queryString = new URLSearchParams(params).toString();
            console.log(queryString)
            const requestOptions = {
              method: "GET",
             
            }
            axios.get(`${NOMINATIM_URL}${queryString}`)

              .then(result => {
                console.log((result.data))
                setListResult(result.data)
              })
              .catch(error => console.log(error.message))


          }}>

            <Search />
          </button>

        </div>
      </div>
      <div>
        <div className="dataResult">
          {listResult.map(item => {
            return (
              

              <a href="#" key={item?.osm_id} className="dataItem" onClick={()=>{
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