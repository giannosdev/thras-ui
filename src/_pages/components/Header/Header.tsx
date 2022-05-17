import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBarProps} from "@mui/material/AppBar/AppBar";

interface Props {
    style?: {};
    transparent?: boolean;
}

const transparentStyle = { background: 'transparent', boxShadow: 'none'};

const pages = ['Home', 'Memberships', 'Blog'];


const Header: React.FC<Props & AppBarProps> = ({...appBarProps}) => {
    return (
        // <Box sx={{ flexGrow: 1 }} style={{...(sticky ? stickyStyle : {}), ...style}}>
            <AppBar {...appBarProps} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%', margin: '0 auto', paddingTop: '25px'}}>
                <img src='logo.png' style={{height: '64px', width: 'auto'}}/>
                <div style={{display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center'}}>
                    <Box component={'nav'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} style={{alignItems: 'center', gap: '50px'}}>
                        {pages.map((page) => (
                            <a key={page} onClick={() => {}}>
                                {page}
                            </a>
                        ))}
                    </Box>
                    <Button style={{backgroundColor: '#e9aa0e', maxHeight: '30px'}} variant='contained' size='medium' >Learn more</Button>
                </div>
            </AppBar>
        // </Box>
    );
};

export default Header;