import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  mapSetting,
  placeHolder,
  boundaryPoints,
  eatingData,
  eat,
  buildingData,
  dormData,
  sportData,
  sport,
  parkingData,
  parking,
  building,
  house,

} from "../data";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Search/SearchBar";

import { useDisclosure } from "@chakra-ui/react";
import ResetCenterView from "./ResetCenterView";
import { Popup } from 'react-leaflet';
import './Map.css'

const MapComponent = () => {
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    console.log(`${lat}, ${lng}`);
  });
  return null;
};

const Map = () => {
<<<<<<< HEAD
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [showLayer, setShowLayer] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);
=======
  const navigate = useNavigate();
  const [parkTick, setParkTick] = useState(false);
  const [dormTick, setDormTick] = useState(false);
  const [buildingTick, setBuildingTick] = useState(false);
  const [eatTick, setEatTick] = useState(false);
  const [sportTick, setSportTick] = useState(false);

  useEffect(() => {

    const tickBuilding = () => {
      setBuildingTick((prev) => !prev);
      console.log("building");
    }

    const tickParking = () => {
      setParkTick((prev) => !prev);
    }

    const tickStadium = () => {
      setSportTick((prev) => !prev);
    }

    const tickDorm = () => {
      setDormTick((prev) => !prev)
    }
    
    const tickEat = () => {
      setEatTick((prev) => !prev);
    }

    // Add an event listener to listen for changes in localStorage
    window.addEventListener("parking", tickParking);
    window.addEventListener("building", tickBuilding);
    window.addEventListener("dormitory", tickDorm);
    window.addEventListener("stadium", tickStadium);
    window.addEventListener("eatary", tickEat);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("parking", tickParking);
      window.removeEventListener("building", tickBuilding);
      window.removeEventListener("dormitory", tickDorm);
      window.removeEventListener("stadium", tickStadium);
      window.removeEventListener("eatary", tickEat);
    };
  }, []);
>>>>>>> 739ff2e3af8c3d0fa7277c526538fb6eb3043631

  const handleMarkerClick = (building) => {
    navigate(`/${building.id}/1`);
  };
<<<<<<< HEAD
  const closeModal = () => {
    // Close the modal
    setShowLayer(false);
  };
  const handleParkingClick = (building) => {
    setShowLayer(true);
    setSelectedBuilding(building);
  };

=======
>>>>>>> 739ff2e3af8c3d0fa7277c526538fb6eb3043631
  const [selectedPosition, setSelectedPosition] = useState(null);

  const location = [selectedPosition?.lat, selectedPosition?.lon];
  console.log(location);
  return (
    <div style={{ width: "100%", height: "900px" }}>
      <MapContainer
        center={mapSetting.center}
        zoom={mapSetting.zoom}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ResetCenterView selectedPosition={selectedPosition} />
        <SearchBar
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={18}
          minZoom={16.5}
        />

        <MapComponent />

        <Polyline positions={boundaryPoints} color="red" />

<<<<<<< HEAD
        {buildingData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={building}
            eventHandlers={{
              click: (e) => handleMarkerClick(marker),
            }}
          ></Marker>
        ))}

        {parkingData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={parking}
            onClose={() => setShowLayer(false)}
            eventHandlers={{
              click: (e) => handleParkingClick(marker),
            }}
          ></Marker>
        ))}

        {showLayer && (
          <Popup
            position={selectedBuilding.location}
            onClose={() => setShowLayer(false)}
            className="custom-popup"
          >
            {/* Layer content */}
            <div className="parking">
              <h3>{selectedBuilding.name}</h3>
              <h3>Slot: {selectedBuilding.slot}</h3>
              <h3>
                Time: {selectedBuilding.openTime}h -{" "}
                {selectedBuilding.closeTime}h
              </h3>

              {/* Add more information or components for the layer */}
            </div>
          </Popup>
        )}

        {eatingData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={eat}
            eventHandlers={{
              click: (e) => handleMarkerClick(marker),
            }}
          ></Marker>
        ))}

        {sportData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={sport}
            eventHandlers={{
              click: (e) => handleMarkerClick(marker),
            }}
          ></Marker>
        ))}

        {dormData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            icon={house}
            eventHandlers={{
              click: (e) => handleMarkerClick(marker),
            }}
          ></Marker>
        ))}
=======
        {buildingData.map((marker) => {
          if (buildingTick) {
            return (
              <Marker
              key={marker.id}
              position={marker.location}
              icon={building}
              eventHandlers={{
                click: (e) => handleMarkerClick(marker),
              }}
              ></Marker>
            )
            
          }
        })}

        
        {parkingData.map((marker) => {
          if (parkTick) {
            return (
              <Marker
                key={marker.id}
                position={marker.location}
                icon={parking}
                eventHandlers={{
                  click: (e) => handleMarkerClick(marker),
                }}
              ></Marker>
            )
          }
        } 
        )}

        {eatingData.map((marker) => {
          if (eatTick) {
            return (
              <Marker
                key={marker.id}
                position={marker.location}
                icon={eat}
                eventHandlers={{
                  click: (e) => handleMarkerClick(marker),
                }}
              ></Marker>
            )
          }
          
          })}

          {sportData.map((marker) => {
            if (sportTick) {
              return (
                <Marker
                key={marker.id}
                position={marker.location}
                icon={sport}
                eventHandlers={{
                  click: (e) => handleMarkerClick(marker),
                }}
                ></Marker>
              )
            }
            })}

        {dormData.map((marker) => {
          if (dormTick) {
            return (
              <Marker
              key={marker.id}
              position={marker.location}
              icon={house}
              eventHandlers={{
                click: (e) => handleMarkerClick(marker),
              }}
              ></Marker>
            )
          }
          
          })}
>>>>>>> 739ff2e3af8c3d0fa7277c526538fb6eb3043631

        {selectedPosition && (
          <Marker position={location} icon={placeHolder}></Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
