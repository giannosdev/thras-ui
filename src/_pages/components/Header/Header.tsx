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
import {useRouter} from "next/router";

interface Props {
    style?: {};
    transparent?: boolean;
}

const transparentStyle = { background: 'transparent', boxShadow: 'none'};

const pages = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'About',
        route: '/about',
        disabled: true,
    },
    {
        label: 'Memberships',
        route: '/memberships',
        disabled: true,
    },
];


const Header: React.FC<Props & AppBarProps> = ({contentScrolled, ...rest}) => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOpenMenu = () => {
        setMenuOpen(true);
    }

    return (
        <>
            <AppBar id='header' {...rest} style={{height: '102px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s ease-in-out', willChange: 'scroll-position', borderBottom: contentScrolled ? '1px solid #e1e1e1': ''}}>
                <div style={{display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center'}}>
                    <img src='logo.png' style={{height: '48px', width: 'auto', filter: !contentScrolled ? 'invert(1)' : ''}}/>
                    <Box component={'nav'} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'right'}} style={{alignItems: 'center', gap: '50px', color: contentScrolled ? '#333' : '#FFF'}}>
                        {pages.map((page) => (
                            <a
                                key={page.route} onClick={() => {}}
                                style={{
                                    color: currentRoute === page.route ? '#D4AF37' : (page.disabled ? '#aaa' : 'inherit'),
                                    cursor: currentRoute === page.route ? 'inherit' : page.disabled ? 'no-drop' : 'pointer'
                                }}>
                                {page.label}
                            </a>
                        ))}
                    </Box>
                    <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                        {/*{contentScrolled && <Button style={{backgroundColor: '#D4AF37', maxHeight: '30px', marginLeft: '25px'}} variant='contained' size='medium' >Learn now</Button>}*/}
                        <Box component={'nav'} sx={{ display: { xs: 'flex', md: 'none' }}}>
                            <MenuIcon onClick={() => handleOpenMenu()} style={{cursor: 'pointer', fontSize: '36px', color: contentScrolled ? 'inherit': 'white'}} />
                        </Box>
                    </div>
                    {/*<div style={{display: 'flex', flexDirection: 'row', gap: '50px', alignItems: 'center'}}>*/}
                    {/*</div>*/}
                </div>
            </AppBar>
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Header;
