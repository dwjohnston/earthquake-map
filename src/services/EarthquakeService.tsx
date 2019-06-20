import axios from "axios"; 

const BASE = "https://earthquake.usgs.gov/fdsnws/event/1/"; 
const BASE_2 = "query?format=geojson&starttime=2019-01-01&endtime=2019-01-02&limit=20000"; 



function formatQuery(lat:number, lng: number, zoom: number) {
    return `${BASE}${BASE_2}`
}
export async function fetchQuakes(lat: number, lng: number, zoom: number) {
    return await axios(formatQuery(lat, lng, zoom)); 
}