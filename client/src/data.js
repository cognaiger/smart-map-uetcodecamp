import marker from "./img/placeholder.png";
import buildingIcon from "./img/building.png";
import eatPlace from "./img/eat.png";
import sportPlace from "./img/sport.png";
import housePlace from "./img/house.png";
import parkingPlace from "./img/parking.png";
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

export const building = L.icon({
    iconUrl: buildingIcon,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
})

export const eat = L.icon({
    iconUrl: eatPlace,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
})

export const sport = L.icon({
    iconUrl: sportPlace,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
})

export const house = L.icon({
    iconUrl: housePlace,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
})

export const parking = L.icon({
    iconUrl: parkingPlace,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
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

export const buildingData = [
    {
        id: 1,
        name: "Giang duong 2 - GD2",
        location: [21.040811380617235, 105.78305661678314],
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

export const eatingData = [
    {
        id: 2,
        name: "Nha an Ngoai Ngu",
        location: [21.040649913001385, 105.78304857015611],
    },
    {
        id: 11,
        name: "Quan an ki tuc xa",
        location: [21.040827652537818, 105.78235924243927]
    },
    {
        id: 12,
        name: "Khu an uong",
        location: [21.038108965453773, 105.78180670738222]
    },
    {
        id: 13,
        name: "Yummy Buffet Hotpot",
        location: [21.03736795189741, 105.78286886215211]
    },
    {
        id: 14,
        name: "S Cafe New Club",
        location: [21.038779879953616, 105.78285276889802]
    }
]

export const dormData = [
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
        id: 15,
        name: "Ki tuc xa C Ngoai Ngu",
        location: [21.04078259183033, 105.78152775764465],
    },
]

export const sportData = [
    {
        id: 5,
        name: "San bong DHQGHN",
        location: [21.03997383272318, 105.78220988173148],
    },
    {
        id: 16,
        name: "San bong su pham",
        location: [21.039505866120283, 105.78476786613466]
    }
]

export const parkingData = [
    {
        id: 17,
        name: "Nha xe Ngoai Ngu",
        slot: 200,
        openTime:7,
        closeTime:20,
        location: [21.039490845752677, 105.78171014785768]
    },
    {
        id: 18,
        name: "Nha xe ky tuc xa",
        slot: 150,
        openTime:7,
        closeTime:20,
        location: [21.040266896096266, 105.78242897987367]
    },
    {
        id: 19,
        name: "Nha xe GD2",
        slot:90,
        openTime:7,
        closeTime:20,
        location: [21.040697477123466, 105.78276693820953]
    },
    {
        id: 20,
        name: "Nha xe truong Luat",
        slot: 300,
        openTime:7,
        closeTime:20,
        location: [21.037773507070707, 105.78263819217683]
    },
    {
        id: 21,
        name: "Nha xe E5",
        slot: 90,
        openTime:7,
        closeTime:20,
        location: [21.03900518638399, 105.78298687934877]
    },
    {
        id: 22,
        name: "Nha xe E1",
        slot: 100,
        openTime:7,
        closeTime:20,
        location: [21.037763493376012, 105.78266501426698]
    },
    {
        id: 23,
        name: "Nha xe B2",
        slot: 250,
        openTime:7,
        closeTime:20,
        location: [21.037643328987247, 105.78241288661957]
    }
]