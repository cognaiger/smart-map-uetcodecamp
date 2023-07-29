import React, { useState } from "react";
import { MapContainer, Marker, Polyline, TileLayer, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapSetting, placeHolder, boundaryPoints, markerData } from "../data";
import { useNavigate } from "react-router-dom";
import SearchBar from './Search/SearchBar'
import { useEffect } from "react";

import ResetCenterView from "./ResetCenterView";
const MapComponent = () => {
    useMapEvent('click', (e) => {
        const { lat, lng } = e.latlng;
        console.log(`${lat}, ${lng}`);
    })
    return null;
}

const Map = () => {

   

    const navigate = useNavigate();

    const handleMarkerClick = (building) => {
        navigate(`/${building.id}/1`)
    }
    const [selectedPosition,setSelectedPosition] = useState(null)
    
    const location = [selectedPosition?.lat,selectedPosition?.lon]
    console.log(location)
    return (
        <div style={{ width: '100%', height: '900px' }}>
            <MapContainer
            center={mapSetting.center}
            zoom={mapSetting.zoom}
            style={{ width: '100%', height: '100%', display: "flex",flexDirection: "column",alignItems:"center" }}
            >
                <ResetCenterView selectedPosition={selectedPosition}/>
                <SearchBar selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition}/>
                
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={18}
                minZoom={16.5}
                />

                <MapComponent />

                <Polyline positions={boundaryPoints} color="red" />

                {/* {markerData.map((marker) => (
                    <Marker key={marker.id} 
                    position={marker.location} 
                    icon={placeHolder}
                    eventHandlers={{
                        click: (e) => handleMarkerClick(marker)
                    }}
                    >
                    </Marker>
                ))} */}
                {selectedPosition && 
                <Marker
                    position={location}
                    icon={placeHolder}
                >

                </Marker>
                }


            </MapContainer>
        </div>
    );
}

export default Map;