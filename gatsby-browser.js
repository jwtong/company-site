const React = require("react");
const Layout = require("./src/components/layout").default;
const grey = require("@material-ui/core/colors/grey").default;
const pink = require("@material-ui/core/colors/pink").default;
const ThemeProvider = require("@material-ui/styles/ThemeProvider").default;
const {
  createMuiTheme,
  responsiveFontSizes
} = require("@material-ui/core/styles");
const createBreakpoints = require("@material-ui/core/styles/createBreakpoints")
  .default;
const Button = require("@material-ui/core/Button").default;

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

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
