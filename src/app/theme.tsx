import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#E1306C",
        },
        secondary: {
            main: "#405DE6"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#b9b9b9"
        },
        background: {
            default: "#020202",
            paper: "#131313"
        },
        mode: "dark"
    },

});

export const getGradient = () => {
    return "linear-gradient(90deg, rgba(225,48,108,1) 0%, rgba(167,48,225,1) 52%, rgba(64,93,230,1) 100%);"
}