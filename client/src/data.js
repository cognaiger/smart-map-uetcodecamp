import marker from "./img/placeholder.png"; 
import L from "leaflet";

export const mapSetting = {
    center: [21.037830886050116, 105.78251380908554],
    zoom: 18,
};

export const placeHolder = L.icon({
    iconUrl: marker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -20]
})

export const boundaryPoints = [
    [21.036800, 105.781632],
    [21.037593, 105.780931],
    [21.040959, 105.781168],
    [21.040893, 105.783382],
    [21.040466, 105.783428],
    [21.040375, 105.785302],
    [21.036738, 105.785168],
    [21.036823, 105.781622]
]

export const markerData = [
    {
        id: 1,
        name: "Giang duong 2 - GD2",
        location: [21.040811380617235, 105.78305661678314],
    },
    {
        id: 2,
        name: "Nha an Ngoai Ngu",
        location: [21.040649913001385, 105.78304857015611],
    },
    {
        id: 3,
        name: "Ki tuc xa A Ngoai Ngu",
        location: [21.040707490620914, 105.78222513198853],
    },
    {
        id: 4,
        name: "Ki tuc xa B Ngoai Ngu",
        location: [21.040372038089863, 105.78220903873445],
    },
    {
        id: 5,
        name: "San bong DHQGHN",
        location: [21.03997383272318, 105.78220988173148],
    },
    {
        id: 6,
        name: "Trung tam khao thi - C1T",
        location: [21.038409375304912, 105.78333020210268],
    },
    {
        id: 7,
        name: "E5",
        location: [21.038429402606774, 105.78274413943294],
    },
    {
        id: 8,
        name: "G2",
        location: [21.038161537221455, 105.78335970640184]
    },
    {
        id: 9,
        name: "E3",
        location: [21.03828921143716, 105.78261673450471]
    },
    {
        id: 10,
        name: "G3",
        location: [21.038098951781638, 105.78204274177553]
    }
    
]