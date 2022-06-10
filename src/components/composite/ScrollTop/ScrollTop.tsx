import { makeStyles } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {Zoom} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export default function ScrollTop(props) {
    const { children } = props;
    const theme = useTheme()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" style={{
                position: "fixed",
                bottom: theme.spacing(8),
                right: theme.spacing(2)
            }}>
                {children}
            </div>
        </Zoom>
    );
}
