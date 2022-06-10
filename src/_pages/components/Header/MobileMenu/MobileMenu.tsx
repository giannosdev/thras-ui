import {useState} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {Accordion, AccordionDetails, AccordionSummary, DialogActions, DialogContent, Link} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

const pages = ['Home', 'Memberships', 'Blog'];

export default function MobileMenu(props: SimpleDialogProps) {
    const { open, onClose} = props;
    const [showMore, setShowMore] = useState(false);

    return (
        <Dialog

            open={open}
            fullScreen
            PaperProps={{sx: {m: 0, minWidth: '100%', border: '5px solid #D4AF37'}}}
            sx={{
                "& .MuiDialog-container": {alignItems: 'flex-end !important', backdropFilter: 'blur(8px)'},

            }}>
            <DialogTitle style={{display: 'flex', height: '80px'}}><CloseIcon onClick={onClose} style={{marginLeft: 'auto', height: '100%', width: 'auto'}}/></DialogTitle>
            <DialogContent style={{display: 'flex', alignItems: 'center'}}>
                <List component={'nav'} style={{alignItems: 'center', gap: '50px', color: '#333'}}>
                    {pages.map((page) => (
                        <ListItem component={'a'} key={page} onClick={() => {}}>
                            {page}
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'left', pl: 3, pb: 2}}>
                <Button fullWidth variant='contained' onClick={onClose} autoFocus style={{backgroundColor: '#D4AF37'}}>
                    LEARN NOW
                </Button>
            </DialogActions>
        </Dialog>
    );
}
