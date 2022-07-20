import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button, Divider, Grid, Link as LinkMUI, List, ListItem, useMediaQuery} from "@mui/material";
import {Circle, Facebook, Instagram, LinkedIn} from "@mui/icons-material";
import Link from "next/link";
import {useTheme} from "@mui/material/styles";
import styles from "../../../styles/Home.module.css";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

interface Props {
    style?: {};
    transparent?: boolean;
}



const bulletPoints = [
    'Expand your knowledge in the financial markets and the force that drives them',
    'Gain an understanding of the economic calendars and be cautious about the upcoming economic events',

    'Understand the most popular financial instruments, how they operate and the risk involved behind them\n' +
    '(Stocks, Forex, Cryptos and CFD’s)',

    'How the spread works, how it is constructed and how is affecting our profit, learn to manage such risk on\n' +
    'big orders. (help you how to find Brokers with raw spread and low commission)',

    'Help you to  get familiar with the most famous platforms such as MT4, MT5 and trading veiw',
    'Basics calculation about risk managment and leverage trading',
    'Backtesting and how to treat the chart',
];

const JoinUsSection: React.FC<Props> = () => {
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <div style={{background: '', marginTop: '50px'}}>
            <Grid container spacing={2} sx={{width: '85%', margin: '0 auto',  display: 'flex', alignItems: 'center'}}>
                <Typography variant='subtitle' variant='h5' style={{fontSize: '1rem', marginTop: '2rem'}}>
                    <div style={{fontSize: '1.25rem', marginBottom: '1em'}}>Hello guys and thank you for your interest in our community,</div><br /><br />
                    <div style={{paddingLeft: '0.5rem'}}>
                        Our goal here is to transform all those who are willing to risk TIME and MONEY to get themselves out of their comfort zone for a better future.
                        If you risk nothing, you gain nothing remeber that.<br/><br />

                        As you can see to reach the top of a large building, you have to start from the stairs and from the level 0 (except if your dadys has money, you gain some levels but not all of them),
                        now for the rest of us who have to put ourselves down and get the job done this site is a great opportunity.<br/><br />

                        Here you can find consolidate knowledge and most importantly in the right order, because when you start in chaos it is very difficult to understand and not get confused.<br/><br />

                        Here we will help you understan the the fundamentals for start trading, and gueide you to get a strong and healthy trader mindset.<br/><br />

                        In this sector 98% of people lose their money due to lack of knowledge.<br/><br />

                        For example, if you are a doctor, you can not be an engineer overnight and vice versa.<br/><br />

                        the same applies to investments and more specifically to intraday trading. To be a successful day trader you need a deep understanding of:<br/><br />
                    </div>
                </Typography>
                <Typography component={Grid} item xs={12} className={styles.sectionTitle} variant='h5'>
                    From beginner to professional
                </Typography>
                <Grid item xs={12} md={4} style={{textAlign: 'left'}}>
                    <img style={{width: '80%'}} src='/more-info.png' />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid component={Typography} variant='h6' item xs={12} sx={{mb: 2}}>
                        Basics
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

            </Grid>

            <Grid container spacing={2} sx={{width: '85%', margin: '0 auto',  display: 'flex', alignItems: 'center'}}>
                <Grid item xs={12} md={8}>
                    <Grid component={Typography} variant='h6' item xs={12} sx={{mb: 2}}>
                        Charting
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
                <Grid item xs={12} md={4} style={{textAlign: 'right'}}>
                    <img style={{width: '80%'}} src='/more-info-chart.png' />
                </Grid>
            </Grid>
        </div>
    );
};

export default JoinUsSection;
