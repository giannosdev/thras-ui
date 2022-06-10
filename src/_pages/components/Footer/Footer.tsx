import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBarProps} from "@mui/material/AppBar/AppBar";
import MobileMenu from "./MobileMenu/MobileMenu";
import {useState} from "react";
import handler from "../../../pages/api/hello";
import {Divider, Grid, List, ListItem, Stack, Link as LinkMUI} from "@mui/material";
import {Facebook, FacebookOutlined, Instagram, LinkedIn} from "@mui/icons-material";
import Link from "next/link";

interface Props {
    style?: {};
    transparent?: boolean;
}


const Footer: React.FC<Props & AppBarProps> = () => {

    return (
        <div style={{margin: '50px auto 0', background: '#111', color: '#333'}}>
            <Grid container spacing={2} style={{width: '90%', margin: '0 auto' , padding: '25px 0'}}>
                <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0, display: 'flex', flexDirection: 'row', justifyContent: 'right'}} >
                    <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
                        {['Home', 'About Us', 'Memberships', 'Contact Us'].map(menuItem => {
                            return <Link href='#!'><LinkMUI sx={{color: '#FFF', textDecoration: 'none', '&:hover': {color: '#D4AF37', cursor: 'pointer'}}}>{menuItem}</LinkMUI></Link>
                        })}
                    </div>

                </Grid>
                {/*<Divider color='white' style={{margin: '20px 0', width: '100%'}}/>*/}
                <Grid item xs={12} style={{paddingLeft: 0, paddingRight: 0}} >
                    <Typography variant='h7' style={{color: '#f1f1f1'}}>Disclaimer</Typography><br /><br/>
                    <Typography variant='caption2' style={{color: '#F7F7F7'}}>
                        All content on this site is provided for informational and educational purposes. This material is not
                        an offer or solicitation for a transaction in any financial instruments. Under no circumstances does
                        this information represent a recommendation to buy or sell financial instruments, nor should it be
                        construed as investment advice.
                    </Typography>
                </Grid>
                <Divider color='white' style={{margin: '20px 0', width: '100%'}}/>
                <Grid item xs={6} style={{paddingLeft: 0, paddingRight: 0, color: '#FFF'}} >
                    <Typography variant='subtitle2'>© 2020 LetsGetTechnical. All rights reserved.</Typography>
                </Grid>
                <Grid item xs={6} style={{display: 'flex', justifyContent: 'right', paddingLeft: 0, paddingRight: 0, gap: '10px'}} >
                    <Facebook sx={{fontSize: '36px', color: '#FFF', '&:hover': {background: '#D4AF37', cursor: 'pointer'}}} />
                    <Instagram sx={{fontSize: '36px', color: '#FFF', '&:hover': {background: '#D4AF37', cursor: 'pointer'}}} />
                    <LinkedIn sx={{fontSize: '36px', color: '#FFF', '&:hover': {background: '#D4AF37', cursor: 'pointer'}}} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
