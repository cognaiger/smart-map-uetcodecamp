import React, { useState } from "react";
import { MapContainer, Marker, Polyline, TileLayer, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapSetting, placeHolder, boundaryPoints, eatingData, eat, buildingData, dormData, sportData, sport, parkingData, parking, building, house } from "../data";
import { useNavigate } from "react-router-dom";
import SearchBar from './Search/SearchBar'

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
    const [selectedPosition, setSelectedPosition] = useState(null)

    const location = [selectedPosition?.lat, selectedPosition?.lon]
    console.log(location)
    return (
        <div style={{ width: '100%', height: '900px' }}>
            <MapContainer
                center={mapSetting.center}
                zoom={mapSetting.zoom}
                style={{ width: '100%', height: '100%', display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <ResetCenterView selectedPosition={selectedPosition} />
                <SearchBar selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={18}
                    minZoom={16.5}
                />

                <MapComponent />

                <Polyline positions={boundaryPoints} color="red" />

                {buildingData.map((marker) => (
                    <Marker key={marker.id}
                        position={marker.location}
                        icon={building}
                        eventHandlers={{
                            click: (e) => handleMarkerClick(marker)
                        }}
                    >
                    </Marker>
                ))}

                {parkingData.map((marker) => (
                    <Marker key={marker.id}
                        position={marker.location}
                        icon={parking}
                        eventHandlers={{
                            click: (e) => handleMarkerClick(marker)
                        }}
                    >
                    </Marker>
                ))}

                {eatingData.map((marker) => (
                    <Marker key={marker.id}
                        position={marker.location}
                        icon={eat}
                        eventHandlers={{
                            click: (e) => handleMarkerClick(marker)
                        }}
                    >
                    </Marker>
                ))}

                {sportData.map((marker) => (
                    <Marker key={marker.id}
                        position={marker.location}
                        icon={sport}
                        eventHandlers={{
                            click: (e) => handleMarkerClick(marker)
                        }}
                    >
                    </Marker>
                ))}

                {dormData.map((marker) => (
                    <Marker key={marker.id}
                        position={marker.location}
                        icon={house}
                        eventHandlers={{
                            click: (e) => handleMarkerClick(marker)
                        }}
                    >
                    </Marker>
                ))}

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