import { Action as ReduxAction, combineReducers } from "redux";
import { FETCH_QUAKE_DATA_SUCCESS, FETCH_QUAKE_DATA_FAILURE, SelectQuakeAction, SELECT_QUAKE_SUCCESS } from "./actions";
import { FetchQuakesDataPayload, QuakeFeature } from "../services/EarthquakeService";
import reduceReducers from "reduce-reducers"; 

export interface State {
    data: {
        [key: string]: QuakeFeature
    },
    errors: {
        message? : string; 
    }, 
    selectedId : string | null; 
}
const initialState : State = {
    data: {},
    errors: {
    },
    selectedId: null, 
};


export interface Action extends ReduxAction {
    payload: any;
}




export interface ResolvedAction extends ReduxAction {
    type: string; //Iffy - should be specifically the SUCCESS/FAILURE string. 
    payload: FetchQuakesDataPayload;
    error?: string;
}

export function dataReducer(state : State = initialState, action: ResolvedAction) : State{

    const { type, payload, error} = action;

    switch (type) {
        case FETCH_QUAKE_DATA_SUCCESS: {
            //Index the features by ID
            const data  =  payload.features.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.id]: cur
                }
            }, state.data);


            return {
                ...state, 
                data
            }
        }

        case FETCH_QUAKE_DATA_FAILURE: {
            return {
                ...state, 
                errors: {
                    message: error
                }
            }
        }

        default: {
            return state;
        }
    }

}



const selectedReducer = (state = initialState, action: SelectQuakeAction ) => {
    const{
        type, payload
    } = action; 

    if (type === SELECT_QUAKE_SUCCESS){
        return {
            ...state, 
            selectedId: payload
        }
    }

    return state; 
}


//@ts-ignore
export const rootReducer = reduceReducers(initialState, dataReducer, selectedReducer); 