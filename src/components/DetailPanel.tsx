
import React from 'react';

//@ts-ignore
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux';
import { selectQuake, getSelectedQuake } from '../redux/selectors';

const useStyles = createUseStyles(({
    root: {
        minHeight: 50, 
        "& thead" : {
            fontWeight: "bold"
        }
    }
}));


export interface DetailPane {

}



export const DetailPane: React.FunctionComponent<DetailPane> = (props) => {
    const {

    } = props;

    const quake = useSelector(getSelectedQuake());
    const classes = useStyles();
    return <div className={classes.root}>


        {quake && <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Magnitude</td>
                    <td>Place</td>
                    <td>URL</td>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>{quake.id}</td>
                    <td>{quake.properties.mag}</td>
                    <td>{quake.properties.place}</td>
                    <td><a href={quake.properties.url} rel ="none" target="_blank">More Details</a></td>

                </tr>
            </tbody>
        </table>}

    </div>;
}

