const { MuiThemeProvider, createMuiTheme } = require("@material-ui/core");
const React = require("react");
const Layout = require("./src/components/layout.tsx").default;
const blue = require("@material-ui/core/colors/blue");

const theme = createMuiTheme({
  palette: {
    primary: blue[500]
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
      fontFamily: "Lato"
    },
    h6: {
      fontFamily: "Lato"
    }
  }
});

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <MuiThemeProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </MuiThemeProvider>
  );
};
