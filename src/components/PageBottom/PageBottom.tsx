import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import WaveBottom from "../WaveBottom";
import { useTheme } from "@material-ui/styles";

const styles = (theme: any) =>
  createStyles({
    container: {
      width: "100vw",
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      "box-sizing": "border-box",
      [theme.breakpoints.up("lg")]: {
        height: "50vh"
      },
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: any;
  colorTop?: string;
}

const PageBottom = ({ children, colorTop, classes }: Props) => {
  return (
    <>
      <WaveBottom colorTop={colorTop} colorBottom="black" />
      <div className={classes.container}>{children}</div>
    </>
  );
};

PageBottom.defaultProps = {
  colorTop: "white"
};

export default withStyles(styles)(PageBottom);
