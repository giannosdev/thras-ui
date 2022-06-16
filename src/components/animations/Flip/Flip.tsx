import * as React from 'react';
import {withStyles} from '@mui/styles'
import styles from './Flip.module.css';
import {Grid} from "@mui/material";
import {CSSProperties, useState} from "react";

interface Props {
    front: React.ReactNode;
    back: React.ReactNode;
    style?: CSSProperties;
}

const Flip: React.FC<Props> = ({front, back, style}) => {
    // const Wrapper = component();
    const [isHovered, setIsHovered] = useState(false);
    const Back = back

    return <Grid item xs={12} md={6} lg={4} sx={{ ...style}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

        <div className={styles.flipBox}>
            <div className={`${styles.flipBoxFront} ${isHovered ? styles.flipBoxFrontHover : ''}`}>
                {front}
            </div>
            {React.createElement(Back, {isHovered})}
        </div>
    </Grid>
}

export default Flip;
