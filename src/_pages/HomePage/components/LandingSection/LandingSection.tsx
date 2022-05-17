import React, {useEffect, useState} from "react";
import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {Button, Box, FormHelperText, FormControl, InputLabel, TextField, Typography} from "@mui/material";
import {Label} from "@mui/icons-material";
import CountrySelect from "./components/CountryDropdown/CountryDropdown";


const LandingSection: React.FC = () => {
    const [showNewsletterForm, setShowNewsletterForm] = useState(false);
    useEffect(() => {
        setTimeout(() => setShowNewsletterForm(true), 2000);
    }, []);
    return <main className={styles.main}>
        <div className={styles.mainInner}>
            <div style={{width: '60%'}}>

                <h1 className={styles.title} style={{
                    borderLeft: '5px dotted #FFF',
                    paddingLeft: '0.5em',
                }}>
                    Let's get <br/><span style={{color: '#e9aa0e'}}>Technical</span>
                </h1>
                <p className={styles.description}>
                    Passion. Patience. Persistence. Profit.
                </p>
                <div style={{display: 'flex', flexDirection: 'row', gap: '25px'}}>
                    <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                        <Button color='primary' variant='outlined' style={{border: '1px solid #e9aa0e', color: '#e9aa0e'}}>View our services</Button>
                    </Link>
                </div>
            </div>
            <div style={{width: '40%'}}>
                <Motion style={{x: spring(showNewsletterForm ? 0 : -2000)}}>
                    {({x}) => <Box
                        component={'form'}
                        style={{
                            background: 'rgba(0,0,0,.2)',
                            color: '#FFF',
                            padding: '25px',
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                        }}>
                        <FormControl style={{display: 'flex', flexDirection: 'row', gap: '25px'}} sx={{mb: 3}}>
                            <TextField style={{width: '50%'}} variant='standard' label={'Name'} id="my-input" aria-describedby="my-helper-text" />
                            <TextField style={{width: '50%'}} variant='standard' label={'Surname'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl style={{width: '100%'}} sx={{mb: 3}}>
                            <TextField variant='standard' label={'Email'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl style={{width: '100%'}} sx={{mb: 3}}>
                            <TextField variant='standard' label={'Phone (optional)'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <CountrySelect style={{width: '100%'}} />
                        <Button sx={{mt: 3}} style={{backgroundColor: '#e9aa0e'}} fullWidth variant='contained' size='medium' >Sign Up</Button>

                    </Box>}
                </Motion>
            </div>
    </div>


    </main>
};

export default LandingSection;
