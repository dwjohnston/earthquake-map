
import React, { useCallback } from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'
import { QuakeFeature } from '../services/EarthquakeService';
import { useDispatch } from 'react-redux';
import { selectQuakeRequest } from '../redux/actions';

const useStyles = createUseStyles(({
    root: {
        width: 20,
        height: 20,
        borderRadius: 10,
        border: "solid 2px red",
        backgroundColor: "white",
    }
}));


export interface EarthquakeMapProps { //Todo extend the correct interface from the google-maps component
    lat: number; //These guys are for use in the google-maps component  
    lng: number; 
    mark: QuakeFeature; 
}



export const MapMarker: React.FunctionComponent<EarthquakeMapProps> = (props) => {
    const {
        mark
    } = props;

    const dispatch = useDispatch(); 
    const doSelectItem = useCallback(() => dispatch(selectQuakeRequest(mark.id)), [mark.id]); 

    const classes = useStyles();
    return <div className={classes.root} onClick = {doSelectItem} >

    </div>;
}

