import { Bounds } from "google-map-react";
import { State } from "./reducers";
import { QuakeFeature } from "../services/EarthquakeService";


export function adjustBounds(bounds: Bounds): Bounds {

    return Object.entries(bounds).reduce((acc, cur) => {

        const lat = cur[1].lat;
        const lng = cur[1].lng;
        return {
            ...acc,
            [cur[0]]: {
                lat: lat > 180 ? lat - 360 : lat,
                lng: lng > 180 ? lng - 360 : lng,
            }
        };
    }, {} as Bounds);
}

export const selectCurrentMarks = (bounds: Bounds) => (state: State): QuakeFeature[] => {
    console.log(bounds);
    if (!bounds) {
        return [];
    }

//    const adjustedBounds = adjustBounds(bounds);
    const allQuakes = Object.values(state.data);
    // return allQuakes.filter(q => {
    //     const [lng, lat, depth] = q.geometry.coordinates;
    //     return (adjustedBounds.ne.lat > lat && adjustedBounds.se.lat < lat && adjustedBounds.se.lng > lng && adjustedBounds.sw.lng < lng);
    // })

    return allQuakes; 
}


export const selectQuake = (id: string) => (state: State): QuakeFeature | undefined => {
    return state.data[id];
}

export const getSelectedQuake = () => (state: State): QuakeFeature | undefined => {
    return (state.selectedId && state.data[state.selectedId])  || undefined;
}