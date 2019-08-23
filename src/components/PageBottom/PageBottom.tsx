import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import { offWhiteBackground } from "../SharedStyles";
import KnitBackground from "../../assets/svg/KnitLightBackground2.svg";

const styles = (theme: any) =>
  createStyles({
    container: {
      position: "relative",
      width: "100vw",
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      "box-sizing": "border-box",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    },
    svgContainer: {
      position: "absolute",
      display: "block",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      overflow: "hidden",
      zIndex: -1
    },
    knitBackground: offWhiteBackground
  });

interface Props extends WithStyles<typeof styles> {
  children: any;
  colorTop?: string;
}

const PageBottom = ({ children, classes }: Props) => {
  return (
    <div className={classes.container}>
      <div className={classes.svgContainer}>
        <KnitBackground className={classes.knitBackground} />
      </div>
      {children}
    </div>
  );
};

PageBottom.defaultProps = {
  colorTop: "white"
};

export default withStyles(styles)(PageBottom);
