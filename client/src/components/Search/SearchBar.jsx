import React, { useState } from "react";
import "./SearchBar.css";
import { CountertopsRounded, Schedule, Search } from "@mui/icons-material";
import { Close, LocationOnOutlined } from "@mui/icons-material";
import axios from 'axios'
function SearchBar({ selectedPosition, setSelectedPosition, ResetCenterView }) {

  const [wordEntered, setWordEntered] = useState("");

  const BuildingApi = "localhost:8000"

  const [listResult, setListResult] = useState([]);

  const [showListResult, setShowListResult] = useState(false);


  return (
    <div className="search" style={{ zIndex: 1200 }} onClick={(e) => e.stopPropagation()} >
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
          <button onClick={async () => {

            const params = {
              name: wordEntered
            }
            const queryString = new URLSearchParams(params).toString();
          


            const requestSearchBuilding = axios.get(`http://${BuildingApi}/search/building/?${queryString}`)
            const requestSearchCourse = axios.get(`http://${BuildingApi}/search/course/?${queryString}`)

            const searchData = await Promise.all([requestSearchBuilding, requestSearchCourse])

            const searchBuildings = searchData[0];
            const searchCourses = searchData[1];

            const buildingArr = searchBuildings.data
            const coursesArr = searchCourses.data

            if (coursesArr.length === 0) {
              setShowListResult(true)
              setListResult(buildingArr);
            }
            else {
              const result = await Promise.all(coursesArr.map(async course => {
                const response = await axios.get(`http://${BuildingApi}/getRoomAndBuildingByCourseId?courseId=${course._id}`)
                return response;
              }))
              const dataArr = result.map(course => course.data);
              const flattened = dataArr.concat.apply([], dataArr).flat();
              setShowListResult(true)
              setListResult(flattened)

            }



          }}>

            <Search />
          </button>

        </div>
      </div>
      <div>
        <div className="dataResult">
          {showListResult && listResult.map((item, index) => {
            let result;
            if (item.display_name) result = item.display_name
            else {
              switch (item.day) {
                case (2):
                  item.day = "Monday"
                  break;
                case (3):
                  item.day = "Tuesday"
                  break;
                case (4):
                  item.day = "Wednesday"
                  break;
                case (5):
                  item.day = "Thursday"
                  break;
                case (6):
                  item.day = "Friday"
                  break;
                case (7):
                  item.day = "Saturday"
                  break;
                case (8):
                  item.day = "Sunday"
                  break;

              }
              const values = Object.values(item)
              const slided = values.slice(0, -2)
              
              result = slided.join(" ");
            }
            return (


              <a href="#" key={index} className="dataItem" onClick={() => {
                setShowListResult(false)
                setSelectedPosition(item)
              }} >
                <LocationOnOutlined sx={{ color: "#e50027" }} />
                {/* <p>{`${item?.display_name ? item.display_name : ""}${item?.courseCode?item.courseCode : ""} ${item?.courseName?item.courseName:""} \n${item?.roomName? item.roomName : ""}${item?.buildingName ? item.buidingName: ""}
                ${item?.teacher?item.teacher:""}`}</p> */}
                <p>{result}</p>
              </a>

            )
          })}


        </div>
      </div>
    </div>


  );
}

export default SearchBar;
