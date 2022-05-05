import * as React from 'react';
import {withStyles} from '@mui/styles'
import {styles} from './Flip.styles';
import {Grid} from "@mui/material";

interface Props {
    classes?: any;
    front: React.ReactNode;
    back: React.ReactNode;
}

const Flip: React.FC<Props> = ({classes, front, back}) => {
    // const Wrapper = component();
    return <Grid item xs={2} md className={classes.flipBox} sx={{m: 0, p: 0}}>
        <div className={classes.flipBoxFront}>
            {front}
        </div>
        <div className={classes.flipBoxBack}>
            {back}
        </div>
    </Grid>
}

export default withStyles(styles)(Flip);