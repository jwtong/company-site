import { responsiveFontSizes, createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { grey, pink } from "@material-ui/core/colors";

const breakpoints = createBreakpoints({});
let theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: pink[500], contrastText: "#fff" }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    h1: {
      fontFamily: "Roboto Condensed",
      fontWeight: "500"
    },
    h2: {
      fontFamily: "Lato"
    },
    h3: {
      fontFamily: "Lato"
    },
    h4: {
      fontFamily: "Lato",
      [breakpoints.down("xs")]: {
        fontSize: "1.25rem"
      }
    },
    h5: {
      fontFamily: "Lato",
      fontWeight: 800,
      color: "#919191"
    },
    h6: {
      fontFamily: "Lato",
      fontSize: "1.375em",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    },
    subtitle1: {
      color: "#5e5e5e",
      fontSize: "1.125rem",
      textAlign: "left",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    },
    button: {
      fontFamily: "Roboto Condensed",
      fontWeight: "Bold",
      fontSize: "1.25rem",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
