import React from "react";
import Image from "next/image";
import {withStyles} from '@mui/styles'
import StocksIcon from './StocksIcon';
import {createSvgIcon, SvgIcon, Typography} from '@mui/material';



import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button, Grid} from "@mui/material";
import Flip from "../../../../components/animations/Flip/Flip";
// import {styles} from './ServicesSection.styles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const services = [
    {
        title: 'Commodities',
        bgImg: '/Commodities.jpg',
        description: 'More than 25 million users globally\n' +
            '\n',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Crypto',
        bgImg: '/Crypto.jpg',

        description: 'Utilising top-tier security practices',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Stocks',
        bgImg: '/Stocks.jpg',
        description: 'More than 25 million users globally\n' +
            '\n',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'ETF',
        bgImg: '/ETF.jpg',

        description: 'Regulated by various authorities around the world',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {
        title: 'Indexes',
        bgImg: '/Index.jpg',

        description: 'Providing services around the world',
        back: <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>,
    },
    {
        title: 'Forex',
        bgImg: '/Forex.jpg',

        description: 'Providing services around the world',
        back: <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>,
    },
]

interface Props {
    classes?: any;
}

const ServicesSection: React.FC = ({classes}) => {
    return <div style={{width: '90%', margin: '0 auto'}}>
        {/*<h2 style={{color: '#e9aa0e'}}>Our Services</h2>*/}
        {/*<Button sx={{mt: 5, borderColor: '#e9aa0e', color: '#e9aa0e', '&:hover': {borderColor: '#e9aa0e', background: '#e9aa0e', color: '#FFF'}}} fullWidth variant='outlined'>Our Services</Button>*/}
        <Typography className={styles.sectionTitle} variant='h4' sx={{textAlign: 'center', mt: 5}}>Gain an understanding of..</Typography>
        <Grid container spacing={3} sx={{m: 0, p: 0, mt: 5}}>
            {services.map(({title, bgImg, description, back}, i) => <Flip
                key={title}
                style={{
                    borderRadius: '5px',
                    '&.MuiGrid-item': {
                        marginLeft: {
                            lg: (i === 0 || i === 3 ? '-32px' : 'inherit'),
                            xs: '-32px'
                        }
                    },
                }}
                front={<div style={{
                    background: `url(${bgImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2 style={{textAlign: 'center', color: 'white', background: 'rgba(0,0,0,.2)', width: '100%', padding: '25px'}}>{title}</h2>

                    {/*<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>*/}
                </div>}
                back={back}/>)}
        </Grid>
    </div>
};

export default withStyles(styles)(ServicesSection);
