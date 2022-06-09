import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../_pages/components/Header/Header";
import {Motion, spring} from 'react-motion';
import {Button} from "@mui/material";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Flip from "../components/animations/flip/Flip";
import LandingSection from "../_pages/HomePage/components/LandingSection/LandingSection";
import ServicesSection from "../_pages/HomePage/components/ServicesSection/ServicesSection";


const Home: NextPage = ({contentScrolled}) => {
  return (
    // <div className={styles.container}>
      <>
        <LandingSection contentScrolled={contentScrolled} />

      <Element name="test1" className="element" >
        <ServicesSection />
      </Element>

      </>
    // </div>
  )
}

export default Home
