import {
  withStyles,
  createStyles,
  WithStyles,
  Divider
} from "@material-ui/core";
import React from "react";
import LineSvg from "../../assets/svg/line.svg";
import { pageContainer } from "../SharedStyles";

const divider = (theme: { palette: { secondary: { main: any } } }) => {
  return {
    height: "4px",
    width: "10%",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "2px"
  };
};

const styles = (theme: {
  palette: { secondary: { main: string | undefined } };
}) =>
  createStyles({
    pageContainer: pageContainer(theme),
    svgContainer: {
      position: "absolute",
      height: "100%",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "150%",
        height: "150%",
        overflow: "hidden"
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: -1
    },
    bodyContainer: {
      display: "flex",
      flexDirection: "column",
      paddingRight: theme.spacing(20),
      paddingLeft: theme.spacing(20),
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(10)
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
      },
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    },
    line: {
      "& path": {
        stroke: "#F6F6F6"
        // stroke: "black"
      },
      height: "80%",
      width: "80%"
    },
    divider: {
      height: "4px",
      width: "10%",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "2px"
    },
    dividerTop: {
      ...divider(theme),
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down("xs")]: {
        marginBottom: theme.spacing(3)
      }
    },
    dividerBottom: {
      ...divider(theme),
      marginTop: theme.spacing(10),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(3)
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: any;
}

const SplashPage = ({ children, classes }: Props) => {
  return (
    <div className={classes.pageContainer}>
      <div className={classes.svgContainer}>
        <LineSvg className={classes.line} />
      </div>
      <div className={classes.bodyContainer}>
        <Divider className={classes.dividerTop} />
        {children}
        <Divider className={classes.dividerBottom} />
      </div>
    </div>
  );
};

export default withStyles(styles)(SplashPage);
