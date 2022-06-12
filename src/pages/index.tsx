import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../_pages/components/Header/Header";
import {Motion, spring} from 'react-motion';
import {Button, Grid} from "@mui/material";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Flip from "../components/animations/flip/Flip";
import LandingSection from "../_pages/HomePage/components/LandingSection/LandingSection";
import ServicesSection from "../_pages/HomePage/components/ServicesSection/ServicesSection";
import JoinUsSection from "../_pages/HomePage/components/JoinUsSection/JoinUsSection";
import {NewsletterForm} from "../_pages/HomePage/components/LandingSection/components/NewsletterForm/NewsletterForm";


const Home: NextPage = ({contentScrolled}) => {
  return <>
      <LandingSection contentScrolled={contentScrolled} />
      <Element name="test1" className="element" >
        <ServicesSection />
      </Element>
      <JoinUsSection />
      <Grid container sx={{mt: 5, background: '#D4AF37', p: 5, mt: 0}}>
          <Grid items md={5} style={{margin: '0 auto'}}>
            <NewsletterForm x={1}/>
          </Grid>
      </Grid>
  </>;
}

export default Home
