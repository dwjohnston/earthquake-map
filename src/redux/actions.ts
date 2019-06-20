
import {Action} from "./reducers"; 
import { Bounds } from "google-map-react";

export const FETCH_QUAKE_DATA_REQUEST = "FETCH_QUAKE_DATA_REQUEST";
export const FETCH_QUAKE_DATA_SUCCESS = "FETCH_QUAKE_DATA_SUCCESS";
export const FETCH_QUAKE_DATA_FAILURE = "FETCH_QUAKE_DATA_FAILURE";

export interface FetchDataRequestPayload {
    bounds: Bounds; 
}

export interface FetchDataRequestAction extends Action {
    type: "FETCH_QUAKE_DATA_REQUEST"
    payload: FetchDataRequestPayload, 
}


export function fetchQuakeDataAction(bounds: Bounds) : FetchDataRequestAction{
    return {
        type: FETCH_QUAKE_DATA_REQUEST,
        payload: {
            bounds
        }
    };
}


export const SELECT_QUAKE_SUCCESS = "SELECT_QUAKE_SUCCESS";


export interface SelectQuakeAction extends Action {
    type: "SELECT_QUAKE_SUCCESS"
    payload: string;
}


export function selectQuakeRequest(id:string) : SelectQuakeAction{
    return {
        type: SELECT_QUAKE_SUCCESS,
        payload: id, 
    };
}