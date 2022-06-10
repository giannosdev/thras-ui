import React, {useEffect, useState} from "react";
import styles from "../../../../../styles/Home.module.css";
import {Motion, spring} from "react-motion";
import {Link} from "react-scroll";
import {
    Button,
    Box,
    FormHelperText,
    FormControl,
    InputLabel,
    TextField,
    Typography,
    Grid,
    useMediaQuery
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import {Label} from "@mui/icons-material";
import CountrySelect from "./components/CountryDropdown/CountryDropdown";


const LandingSection: React.FC = ({contentScrolled}) => {
    const [showNewsletterForm, setShowNewsletterForm] = useState(false);
    useEffect(() => {
        setTimeout(() => setShowNewsletterForm(true), 2000);
    }, []);
    const theme = useTheme();

    const smUp = useMediaQuery(theme.breakpoints.up('md'));
    return <main className={styles.main}>
        <Grid container className={styles.mainInner} >
            <Grid item xs md={8} sx={{textAlign: !smUp ? 'center' : ''}}>

                <Typography variant={smUp ? 'h2' : 'h4'} className={styles.title} sx={{
                    borderLeft: smUp ? '5px dotted #FFF' : '',
                    paddingLeft: smUp ? '0.5em' : '',
                }}>
                    Let's get <br/><span style={{color: '#D4AF37'}}>Technical</span>
                </Typography>
                <p style={{fontSize: !smUp ? '1.15rem' : '1.5rem'}} className={styles.description} >
                    Passion | Patience | Persistence | Profit
                </p>
                <div style={{display: 'flex', flexDirection: 'row', gap: '25px', justifyContent: !smUp ? 'center' : 'inherit'}}>
                    <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} offset={-135}>
                        <Button color='primary' variant='outlined' style={{border: '1px solid #D4AF37', color: '#D4AF37'}}>WHAT WE OFFER</Button>

                    </Link>
                   <Button style={{backgroundColor: '#D4AF37'}} variant='contained' size='medium' >Learn now</Button>
                </div>
            </Grid>
            <Grid item sx={{display: {xs: 'none', md: 'flex'}}} md={4}>
                <Motion style={{x: spring(showNewsletterForm ? 0 : -2000)}}>
                    {({x}) => <Box
                        component={'form'}
                        style={{
                            background: 'rgba(255,255,255, .75)',
                            color: '#FFF',
                            padding: '25px',
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                            borderRadius: '10px'
                        }}>
                        <Typography variant='h5' style={{color: '#777'}}>Sign up to our newsletter</Typography><br/>
                        <FormControl style={{display: 'flex', flexDirection: 'row', gap: '25px'}} sx={{mb: 3}}>
                            <TextField style={{width: '50%'}} variant='standard' label={'Name'} id="my-input" aria-describedby="my-helper-text" />
                            <TextField style={{width: '50%'}} variant='standard' label={'Surname'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl style={{width: '100%'}} sx={{mb: 3}}>
                            <TextField variant='standard' label={'Email'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl style={{width: '100%'}} sx={{mb: 5}}>
                            <TextField variant='standard' label={'Phone (optional)'} id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                        <CountrySelect style={{width: '100%'}} />
                        <br/>
                        <Button fullWidth color='primary' variant='contained' style={{background: '#111'}}>Sign Up</Button>
                    </Box>}
                </Motion>
            </Grid>
    </Grid>


    </main>
};

export default LandingSection;
