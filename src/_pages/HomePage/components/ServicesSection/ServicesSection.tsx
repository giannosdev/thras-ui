import React from "react";
import Image from "next/image";
import {withStyles} from '@mui/styles'
import StocksIcon from './StocksIcon';
import {createSvgIcon, SvgIcon, Typography, useMediaQuery} from '@mui/material';



import styles from "../../../../../styles/Home.module.css";
import sstyles from "../../../../components/animations/Flip/Flip.module.css"
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button, Grid} from "@mui/material";
import Flip from "../../../../components/animations/Flip/Flip";
// import {styles} from './ServicesSection.styles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import {useTheme} from "@mui/material/styles";

const services = [
    {
        title: 'Commodities',
        bgImg: '/Commodities.jpg',
        description: 'More than 25 million users globally\n' +
            '\n',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/Commodities_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
    {
        title: 'Crypto',
        bgImg: '/Crypto.jpg',

        description: 'Utilising top-tier security practices',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/Crypto_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
    {
        title: 'Stocks',
        bgImg: '/Stocks.jpg',
        description: 'More than 25 million users globally',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/Stocks_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
    {
        title: 'ETF',
        bgImg: '/ETF.jpg',

        description: 'Regulated by various authorities around the world',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/ETF_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
    {
        title: 'Indexes',
        bgImg: '/Index.jpg',

        description: 'Providing services around the world',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/Index_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
    {
        title: 'Forex',
        bgImg: '/Forex.jpg',

        description: 'Providing services around the world',
        back: ({isHovered}) => <div style={{background: 'url("/blurred/Forex_blurred.png")'}} className={`${sstyles.flipBoxBack} ${isHovered ? sstyles.flipBoxBackHover : ''}`}>
            a
        </div>,
    },
]

interface Props {
    classes?: any;
}

const ServicesSection: React.FC = ({classes}) => {
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('md'));
    return <div style={{width: '85%', margin: '0 auto'}}>
        {/*<h2 style={{color: '#D4AF37'}}>Our Services</h2>*/}
        {/*<Button sx={{mt: 5, borderColor: '#D4AF37', color: '#D4AF37', '&:hover': {borderColor: '#D4AF37', background: '#D4AF37', color: '#FFF'}}} fullWidth variant='outlined'>Our Services</Button>*/}

        <Grid container spacing={3} sx={{m: 0, p: 0, mt: 5, width: '100%', borderRadius: '8px'}}>
            <Typography component={Grid} item xs={12} className={styles.sectionTitle} variant='h5' sx={{textAlign: 'center', margin: !smUp ? '50px auto 0' : '50px 0 0 0'}}>Gain an understanding of..</Typography>
            {services.map(({title, bgImg, description, back}, i) => <Flip
                key={title}
                front={<div style={{
                    borderRadius: '8px',
                    background: `url(${bgImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                    boxShadow: '2px 3px 7px #ddd',
                }}>
                    {/*<h2 style={{textAlign: 'center', color: 'white', background: 'rgba(0,0,0,.2)', width: '100%', padding: '25px'}}>{title}</h2>*/}

                    {/*<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>*/}
                </div>}
                back={back}/>)}
        </Grid>
    </div>
};

export default withStyles(styles)(ServicesSection);
