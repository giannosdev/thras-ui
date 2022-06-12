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
import JoinUsSection from "../_pages/HomePage/components/JoinUsSection/JoinUsSection";


const Home: NextPage = ({contentScrolled}) => {
  return <>
      <LandingSection contentScrolled={contentScrolled} />
      <Element name="test1" className="element" >
        <ServicesSection />
      </Element>
      <JoinUsSection />
  </>;
}

export default Home
