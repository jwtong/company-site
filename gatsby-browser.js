const React = require("react");
const Layout = require("./src/components/layout").default;
const grey = require("@material-ui/core/colors/grey").default;
const pink = require("@material-ui/core/colors/pink").default;
const ThemeProvider = require("@material-ui/styles/ThemeProvider").default;
const { createMuiTheme } = require("@material-ui/core/styles");
const Button = require("@material-ui/core/Button").default;

const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
    secondary: { main: pink[500], contrastText: "#fff" }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    h1: {
      fontFamily: "Lato"
    },
    h2: {
      fontFamily: "Lato"
    },
    h3: {
      fontFamily: "Lato"
    },
    h4: {
      fontFamily: "Lato"
    },
    h5: {
      fontFamily: "Lato",
      fontWeight: 800,
      color: "#919191"
    },
    h6: {
      fontFamily: "Lato",
      fontSize: 22
    },
    subtitle1: {
      color: "#5e5e5e",
      fontSize: 18
    }
  }
});

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
