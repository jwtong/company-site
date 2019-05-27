import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import OfflineBolt from "@material-ui/icons/OfflineBolt";
import { withStyles } from "@material-ui/core/styles";
import hexToRgba from "../utils/hex_rgba";

const styles = {
  buttonLabel: {
    fontFamily: "Lato",
    fontWeight: "Bold",
    fontSize: "18px"
  }
};

class Header extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "transparent"
    };
  }

  public componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  public componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  private calculateBackgroundColorOpacity = (
    offsetTop: number,
    fadeCoefficient: number,
    currentScrollY: number
  ) => {
    if (currentScrollY <= offsetTop) {
      return 0;
    } else {
      return Math.min((currentScrollY - offsetTop) * fadeCoefficient, 1);
    }
  };

  private handleScroll = () => {
    const backgroundColorOpacity = this.calculateBackgroundColorOpacity(
      50,
      0.03,
      window.scrollY
    );
    const rgba = hexToRgba(
      this.props.theme.palette.primary.main,
      100 * backgroundColorOpacity
    );
    this.setState({
      backgroundColor: rgba
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="fixed"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "3em",
            backgroundColor: this.state.backgroundColor
          }}
        >
          <IconButton href={"/"} style={{ fontSize: "60px", color: "white" }}>
            <OfflineBolt fontSize="inherit" />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap"
            }}
          >
            <Button
              classes={{
                label: classes.buttonLabel
              }}
              size="large"
              color="inherit"
              href={"/services/"}
            >
              Services
            </Button>
            <Button
              classes={{
                label: classes.buttonLabel
              }}
              size="large"
              color="inherit"
              href={"/about/"}
            >
              About Us
            </Button>
            <Button
              classes={{
                label: classes.buttonLabel
              }}
              size="large"
              color="inherit"
              href={"/sample-work/"}
            >
              Sample Work
            </Button>
            <Button
              classes={{
                label: classes.buttonLabel
              }}
              size="large"
              color="inherit"
              href={"/contact/"}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
