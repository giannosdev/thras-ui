import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Divider, Grid, Link as LinkMUI, List, ListItem, useMediaQuery} from "@mui/material";
import {Circle, Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import styles from "../../../../../styles/Home.module.css";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

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

const braggingPoints = [
    {
        icon: <HandshakeOutlinedIcon style={{fontSize: '64px', color: '#d4af37'}} />,
        title: 'Reliable',
        description: 'Knowladge from honest and reliable sources.',
    },
    {
        icon: <AutoGraphOutlinedIcon style={{fontSize: '64px', color: '#d4af37'}} />,
        title: 'Efficient',
        description: 'Learn a powerful skill and use it for any market and from anywhere.',
    },
    {
        icon: <PublicIcon style={{fontSize: '64px', color: '#d4af37'}} />,
        title: 'Global',
        description: 'Knowledge from honest and reliable sources.',
    },
    // {
    //     icon: <AutoGraphOutlinedIcon style={{fontSize: '64px', color: '#d4af37'}} />,
    //     title: 'Efficiency 3',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
];

const JoinUsSection: React.FC<Props> = () => {
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <div style={{background: '', marginTop: '50px'}}>
            <Grid container spacing={2} sx={{width: '85%', margin: '0 auto',  display: 'flex', alignItems: 'center'}}>
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
                    <Button size='large' color='primary' variant='outlined' style={{border: '1px solid #D4AF37', color: '#D4AF37', margin: '25px 0', display: 'flex'}}>More info</Button>
                </Grid>
                <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                    <img style={{width: '70%'}} src='/joinus.png' />
                </Grid>
            <Grid item xs={12}>

            </Grid>
            </Grid>
            <Grid container sx={{width: '85%', m: '25px auto 0', pb: 4}} spacing={2}>
                {braggingPoints.map(bP => <Grid
                    item
                    xs={4}>
                    <div
                        style={{
                            background: '#FFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid #ccc',
                            gap: '10px',
                            padding: '15px'
                        }}>
                        {bP.icon}
                        <Typography variant='h6'>{bP.title}</Typography>
                        <Typography variant='subtitle'>{bP.description}</Typography>
                    </div>
                </Grid>)}
            </Grid>
        </div>
    );
};

export default JoinUsSection;
