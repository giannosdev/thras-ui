import {useState} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import {Accordion, AccordionDetails, AccordionSummary, DialogActions, DialogContent, Link} from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    onAgree: () => void;
}

export default function Disclaimer(props: SimpleDialogProps) {
    const { open, onAgree} = props;
    const [showMore, setShowMore] = useState(false);

    return (
        <Dialog
            open={open}
            PaperProps={{sx: {m: 0, minWidth: '100%'}}}
            sx={{
                "& .MuiDialog-container": {alignItems: 'flex-end !important', backdropFilter: 'blur(8px)'},

            }}>
            <DialogTitle style={{fontWeight: 'bolder'}}>Disclaimer</DialogTitle>
            <DialogContent>
                <Accordion sx={{p: 0, boxShadow: 'none'}} expanded={showMore}>
                    <Typography variant='h6' style={{fontWeight: '400', fontSize: '1.3rem'}}>
                        All content on this site is provided for informational and educational purposes. This material is not
                        an offer or solicitation for a transaction in any financial instruments. Under no circumstances does
                        this information represent a recommendation to buy or sell financial instruments, nor should it be
                        construed as investment advice.
                    </Typography>
                    {/*<AccordionSummary sx={{p: 0, '&:hover': {cursor: 'default'}}}>*/}
                    {/*</AccordionSummary>*/}
                    <AccordionDetails sx={{p: 0, border: 'none', boxShadow: 'none', mt: 2}}>
                        <Typography variant='subtitle1'>
                            Let&#39;s get Technical accepts no responsibility for any use that may be made of these comments and
                            for any consequences resulting in it. No representation or warranty is given as to the accuracy or
                            completeness of this information. Consequently, any person acting on it does so entirely at their
                            own risk. The analysis does not involve any specific investment objectives, financial situation and
                            need of any specific person who may receive it. It has not been prepared in accordance with legal
                            requirements designed to promote the independence of research and as such it is considered to be
                            marketing communication.

                            Let&#39;s get Technical aims to establish, maintain and operate effective organizational and
                            administrative arrangements with a view to taking all reasonable steps to prevent conflicts of
                            interest from constituting or giving rise to a material risk of damage to the interest of our users or
                            clients. Let&#39;s get Technical operates a policy of independence, which requires our employees to act
                            in our clients&#39; best interests and to disregard any conflicts of interest in providing our services.&quot;
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </DialogContent>
            <DialogActions sx={{justifyContent: 'left', pl: 3, pb: 2}}>
                <Button variant='contained' onClick={onAgree} autoFocus style={{backgroundColor: '#e9aa0e'}}>
                    Agree
                </Button>
                {!showMore && <Link
                    onClick={() => setShowMore(true)}
                    sx={{
                        color: '#B8860B',
                        paddingLeft: '10px',
                        textDecoration: 'none',
                        "&:hover": {cursor: 'pointer'}
                    }}>
                    Learn more
                </Link>}
            </DialogActions>
        </Dialog>
    );
}
