import React from "react";
import {withStyles} from '@mui/styles'

// import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button, Grid} from "@mui/material";
import Flip from "../../../../components/animations/Flip/Flip";
import {styles} from './ServicesSection.styles';

const services = [
    {
        title: 'Bookshelf',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        back: 's'
    },
    {
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Weekly news',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'test2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

interface Props {
    classes?: any;
}

const ServicesSection: React.FC = ({classes}) => {
    return <div style={{width: '90%', margin: '0 auto'}}>
        <h2 style={{color: 'darkgoldenrod'}}>Our Services</h2>
        <Grid container columns={4} spacing={4} sx={{m: 0, p: 0}}>
            {services.map(({title, description, back}) => <Flip key={title +23}
                front={<>
                    <h2>{title}2</h2>
                    <p>{description}</p>
                    {/*<img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className="flip-box-img"/>*/}
                </>}
                back={back}/>)}
        </Grid>
    </div>
};

export default withStyles(styles)(ServicesSection);