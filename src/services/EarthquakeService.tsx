import axios from "axios";
import { FetchDataRequestPayload } from "../redux/actions";
import { removeProperties } from "@babel/types";
import { Bounds } from "google-map-react";

const BASE = "https://earthquake.usgs.gov/fdsnws/event/1/";
const BASE_2 = "query?format=geojson&starttime=2019-01-01&endtime=2019-07-02&limit=10&minmagnitude";

function formatQuery(bounds: Bounds) {

    //Here I'm assuming that the rectangle has equal lng/lat on the corners. 
    return `${BASE}${BASE_2}&minlatitude=${bounds.sw.lat}&maxlatitude=${bounds.nw.lat}&minlongitude=${bounds.sw.lng}&maxlongitude=${bounds.se.lng}`
}



//I'm only going to list the data I'm interested in.
export interface QuakeFeature {
    type: "Feature",
    id: string;
    properties: {
        mag: number,
        place: string;
        url: string;
    },
    geometry: {
        type: "Point",
        coordinates: [number, number, number]
    },

}
export interface FetchQuakesDataPayload {
    type: "FeatureCollection",
    features: QuakeFeature[]
}

export async function fetchQuakes(request: FetchDataRequestPayload): Promise<QuakeFeature> {
    const { bounds} = request;
    try {
        const result = await axios(formatQuery(bounds));
        return result.data as unknown as QuakeFeature;
    } catch (err) {
        throw new Error(err.message);
    }
}