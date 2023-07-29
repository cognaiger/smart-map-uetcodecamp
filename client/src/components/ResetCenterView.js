
import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet"
const ResetCenterView = ({selectedPosition}) => {
    console.log(selectedPosition)
    const map = useMap();
        useEffect(()=>{
            if(selectedPosition){
                map.setView(
                    L.latLng(selectedPosition?.lat,selectedPosition?.lon),
                    map.getZoom(),
                    {
                        animate:true
                    }
                )
            }
        },[selectedPosition])
    return null;
}

export default ResetCenterView