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


const Header: React.FC<Props & AppBarProps> = ({contentScrolled, ...rest}) => {
    return (
        // <Box sx={{ flexGrow: 1 }} style={{...(sticky ? stickyStyle : {}), ...style}}>
            <AppBar id='header' {...rest} style={{height: '102px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s ease-in-out'}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box component={'nav'} sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <MenuIcon style={{fontSize: '36px', color: contentScrolled ? 'inherit': 'white'}} />
                    </Box>
                    <img src='logo.png' style={{height: '48px', width: 'auto', filter: !contentScrolled ? 'invert(1)' : '', margin: 'auto'}}/>
                    {/*<div style={{display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center'}}>*/}
                        <Box component={'nav'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'right'}} style={{alignItems: 'center', gap: '50px', color: contentScrolled ? '#333' : '#FFF'}}>
                            {pages.map((page) => (
                                <a key={page} onClick={() => {}}>
                                    {page}
                                </a>
                            ))}
                        </Box>
                        {contentScrolled && <Button style={{backgroundColor: '#e9aa0e', maxHeight: '30px', marginLeft: '25px'}} variant='contained' size='medium' >Learn now</Button>}
                    {/*</div>*/}
                </div>
            </AppBar>
        // </Box>
    );
};

export default Header;
