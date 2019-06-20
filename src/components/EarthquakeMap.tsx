
import React, { useEffect, useState } from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuakeDataAction } from '../redux/actions';
import { MapMarker } from './MapMaker';
import { selectCurrentMarks } from '../redux/selectors';

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
        lat: -26,
        lng: 156
    },
    zoom: 6
}

export const EarthquakeMap: React.FunctionComponent<EarthquakeMapProps> = (props) => {
    const {

    } = props;


    const [bounds, updateBounds] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (bounds) {
            console.log(bounds); 
            //Todo enforce typescript interface here
            dispatch(fetchQuakeDataAction(bounds.bounds));
        }
    }, [bounds]);

    const marks = useSelector(selectCurrentMarks(bounds && bounds.bounds));
    console.log(marks);
    const classes = useStyles();
    return <div className={classes.root}>


        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY || "nokey" }}
            defaultCenter={defaults.center}
            defaultZoom={defaults.zoom}
            onChange={updateBounds}


        >
            {marks.map((v, i) => <MapMarker
                lat={v.geometry.coordinates[1] }
                lng={v.geometry.coordinates[0]   }

                mark={v} key={i} />)}

        </GoogleMapReact>
    </div>;
}

