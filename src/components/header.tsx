import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const ListLink = (props: any) => (
  <li
    style={{ display: `inline-block`, marginRight: `1rem`, marginTop: "10px" }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
);

// <div
//   style={{
//     display: "flex",
//     justifyContent: "space-between",
//     paddingLeft: "10%",
//     alignItems: "center",
//     position: "fixed",
//     width: "100%",
//     height: "10%",
//     backgroundColor: "red",
//     zIndex: "100"
//   }}
// >
//   <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//     <h3 style={{ display: `inline` }}>{siteTitle}</h3>
//   </Link>
//   <nav style={{ marginRight: "1rem" }}>
//     <Link style={{ marginRight: "1rem" }} to="/about/">
//       About Us
//     </Link>
//     <Link style={{ marginRight: "1rem" }} to="/services/">
//       Services
//     </Link>
//     <Link style={{ marginRight: "1rem" }} to="/sample-work/">
//       Sample Work
//     </Link>
//     <Link style={{ marginRight: "1rem" }} to="/contact/">
//       Contact
//     </Link>
//   </nav>
// </div>
const Header = ({ siteTitle }: { siteTitle: string }) => (
  <AppBar position="fixed">
    <Toolbar style={{ flexWrap: "wrap" }}>
      <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
        <Button color="inherit" href={"/"}>
          {siteTitle}
        </Button>
      </Typography>
      <Button color="inherit" href={"/about/"}>
        About Us
      </Button>
      <Button color="inherit" href={"/services/"}>
        Services
      </Button>
      <Button color="inherit" href={"/sample-work/"}>
        Sample Work
      </Button>
      <Button color="inherit" href={"/contact/"}>
        Contact
      </Button>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
