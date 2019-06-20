import React from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'
import { directive } from '@babel/types';
import { EarthquakeMap } from './EarthquakeMap';

const useStyles = createUseStyles(({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 20, 
  },
  mapContainer: {
    flex: "1 0 auto",



  }

}));


function App() {

  const classes = useStyles();
  return (<div className={classes.root} >
    <div> form panel</div>

    <div className={classes.mapContainer}>
      <EarthquakeMap />
    </div>
  </div>
  );
}

export default App;
