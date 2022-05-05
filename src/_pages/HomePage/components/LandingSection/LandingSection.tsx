import React from "react";
import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button} from "@mui/material";


const LandingSection: React.FC = () => {
    return <main className={styles.main}>
        <div className={styles.mainInner}>
            <Motion style={{x: spring(true ? 0 : -1000)}}>
                {({x}) =>
                    <h1 className={styles.title} style={{
                        WebkitTransform: `translate3d(${x}px, 0, 0)`,
                        transform: `translate3d(${x}px, 0, 0)`,
                        borderLeft: '5px dotted #ccc',
                        paddingLeft: '0.5em',
                    }}>
                        Let's get <br/><span style={{color: 'darkgoldenrod'}}>Technical</span>
                    </h1>
                }
            </Motion>

            <p className={styles.description}>
                Our mission is to provide you the building<br/>blocks to successful trading
            </p>
            <div style={{display: 'flex', flexDirection: 'row', gap: '25px'}}>

                <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                    <Button color='primary' variant='outlined'>View our services</Button>
                </Link>

                <Button style={{backgroundColor: 'black'}} variant='contained'>Subscribe</Button>
            </div>
        </div>


    </main>
};

export default LandingSection;