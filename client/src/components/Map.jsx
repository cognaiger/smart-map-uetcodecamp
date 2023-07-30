import React, { useState } from "react";
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
import { useDisclosure,Modal } from "@chakra-ui/react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const [showLayer, setShowLayer] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleMarkerClick = (building) => {
    navigate(`/${building.id}/1`);
  };
  const closeModal = () => {
    // Close the modal
    setShowLayer(false);
  };
  const handleParkingClick = (building) => {
    setShowLayer(true);
    setSelectedBuilding(building);
  };

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
          <Popup position={selectedBuilding.location} onClose={() => setShowLayer(false)} className="custom-popup">
          {/* Layer content */}
          <div className="parking">
            <h3>{selectedBuilding.name}</h3>
            <h3>Slot: {selectedBuilding.slot}</h3>
            <h3>Time: {selectedBuilding.openTime}h - {selectedBuilding.closeTime}h</h3>
            
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

        {selectedPosition && (
          <Marker position={location} icon={placeHolder}></Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
