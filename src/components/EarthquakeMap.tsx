
import React from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'
import GoogleMapReact from 'google-map-react';

const useStyles = createUseStyles(({
    root: {
        height: "100%",
        width: "100%",
        border: "solid 1px black",
    }
}));


export interface EarthquakeMapProps {

}

const defaults = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
}

export const EarthquakeMap: React.FunctionComponent<EarthquakeMapProps> = (props) => {
    const {

    } = props;


    const classes = useStyles();
    return <div className={classes.root}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY || "nokey" }}
            defaultCenter={defaults.center}
            defaultZoom={defaults.zoom}

        />
    </div>;
}

