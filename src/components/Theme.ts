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
      fontFamily: "Ubuntu",
      fontWeight: "500"
    },
    h2: {
      fontFamily: "Open Sans"
    },
    h3: {
      fontFamily: "Open Sans"
    },
    h4: {
      fontFamily: "Open Sans",
      [breakpoints.down("xs")]: {
        fontSize: "1.25rem"
      }
    },
    h5: {
      fontFamily: "Open Sans",
      fontWeight: 800,
      color: "#919191"
    },
    h6: {
      fontFamily: "Open Sans",
      fontSize: "1.375em",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    },
    subtitle1: {
      fontFamily: "Open Sans",
      color: "#5e5e5e",
      fontSize: "1.125rem",
      textAlign: "left",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    },
    button: {
      fontFamily: "Ubuntu",
      fontWeight: "Bold",
      fontSize: "1.25rem",
      [breakpoints.down("xs")]: {
        fontSize: "1rem"
      },
      letterSpacing: "1px"
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
