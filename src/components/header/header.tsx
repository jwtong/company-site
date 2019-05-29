import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import OfflineBolt from "@material-ui/icons/OfflineBolt";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { hexToRgba, rgbToHex } from "../../utils/hex_rgba";

const styles = createStyles({
  buttonLabel: {
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "18px"
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "3em"
  },
  appBar: { background: "transparent", boxShadow: "none" },
  icon: { fontSize: "60px", color: "white" },
  wrapperRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
});

interface Props extends WithStyles<typeof styles> {
  theme: any;
  pages: Array<{ link: string; text: string }>;
}

interface State {
  backgroundColor: string;
}

class Header extends React.Component<Props, State> {
  public constructor(props: Props) {
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
      rgbToHex(this.props.theme.palette.primary.dark),
      100 * backgroundColorOpacity
    );
    this.setState({
      backgroundColor: rgba
    });
  };

  public render() {
    const { classes, pages } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar
          className={classes.toolbar}
          style={{
            backgroundColor: this.state.backgroundColor
          }}
        >
          <IconButton href={"/"} className={classes.icon}>
            <OfflineBolt fontSize="inherit" />
          </IconButton>
          <div className={classes.wrapperRight}>
            {pages.map((p: any) => {
              return (
                <Button
                  classes={{
                    label: classes.buttonLabel
                  }}
                  key={p.text}
                  size="large"
                  color="inherit"
                  href={p.link}
                >
                  {p.text}
                </Button>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
