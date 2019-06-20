
import React from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(({
    root: {

    }
}));


export interface EqList {

}



export const EqList: React.FunctionComponent<EqList> = (props) => {
    const {

    } = props;


    const classes = useStyles();
    return <div className={classes.root}>
    </div>;
}

