const { MuiThemeProvider, createMuiTheme } = require("@material-ui/core");
const React = require("react");
const Layout = require("./src/components/layout.tsx").default;
const blue = require("@material-ui/core/colors/blue");

const theme = createMuiTheme({
  palette: {
    primary: blue[500]
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
