import React from "react";
import Image from "next/image";
import {withStyles} from '@mui/styles'
import StocksIcon from './StocksIcon';
import {createSvgIcon, SvgIcon} from '@mui/material';


// import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button, Grid} from "@mui/material";
import Flip from "../../../../components/animations/Flip/Flip";
import {styles} from './ServicesSection.styles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const services = [
    {
        title: 'Forex',
        icon: <CurrencyExchangeIcon style={{color: 'white', fontSize: '80px'}} />,
        description: 'More than 25 million users globally\n' +
            '\n',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Stocks',
        // icon: <StocksIcon style={{fill: '#FFF', font: '830px'}} />,

        description: 'Regulated by various authorities around the world',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

    },
    {
        title: 'Secure',
        description: 'Utilising top-tier security practices',
        back: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Global',
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
        <Button sx={{mt: 5, borderColor: '#e9aa0e', color: '#e9aa0e', '&:hover': {borderColor: '#e9aa0e', background: '#e9aa0e', color: '#FFF'}}} fullWidth variant='outlined'>Our Services</Button>
        <Grid container spacing={3} sx={{m: 0, p: 0, mt: 5}}>
            {services.map(({title, icon, description, back}, i) => <Flip key={title} style={{'&.MuiGrid-item': {marginLeft: {lg: (i === 0 || i === 3 ? '-32px' : 'inherit'), xs: '-32px' }}}}
                front={<>
                    <h2 style={{textAlign: 'center', color: 'white'}}>{title}</h2>
                    {icon}
                    {/*<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>*/}
                </>}
                back={back}/>)}
        </Grid>
    </div>
};

export default withStyles(styles)(ServicesSection);