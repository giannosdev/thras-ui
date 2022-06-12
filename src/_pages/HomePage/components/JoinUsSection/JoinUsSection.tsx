import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Divider, Grid, Link as LinkMUI, List, ListItem, useMediaQuery} from "@mui/material";
import {Circle, Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import styles from "../../../../../styles/Home.module.css";

interface Props {
    style?: {};
    transparent?: boolean;
}

const bulletPoints = [
    'Learn how to use simple technical tools for identifying supply and demand zones.',
    'Analysis of all asset groups, individually and collectively – positive and negative correlations between them.',
    'Access to a big knowledge base with all necessary information and tools to build investors’/traders’ mindset.',
    'Find what asset group fits best your personality and trading style.',
    'Skills and Risk management.',
    'Criteria for a wise choice of broker for your trading or investment – spot the differences between a scam broker and a legitimate one.',
];


const JoinUsSection: React.FC<Props> = () => {
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <div style={{background: 'rgb(231, 239, 254)', marginTop: '50px'}}>
            <Grid container spacing={2} sx={{width: '90%', margin: '0 auto',  display: 'flex', alignItems: 'center'}}>
                <Typography component={Grid} item xs={12} className={styles.sectionTitle} variant='h5' sx={{textAlign: 'center', margin: !smUp ? '50px auto 0' : '50px 0 0 0'}}>
                    Benefits from joining us
                </Typography>
                <Grid item xs={12} md={6}>
                    <Grid component={Typography} variant='h6' item xs={12} sx={{mb: 2}}>
                        What you should expect from us:
                    </Grid>
                    <List sx={{ listStyleType: 'disc' }}>
                        {bulletPoints.map(bulletItem =>
                            <ListItem key={bulletItem} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Circle sx={{fontSize: '6px', mr: 2}}/>
                                <Typography variant='subtitle'>{bulletItem}</Typography>
                            </ListItem>
                        )}
                    </List>
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                    <img style={{width: '70%'}} src='/joinus.png' />
                </Grid>
            </Grid>
        </div>
    );
};

export default JoinUsSection;
