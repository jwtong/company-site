import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import WaveBottom from "../wave_bottom";
import { useTheme } from "@material-ui/styles";

const styles = theme =>
  createStyles({
    container: {
      width: "100vw",
      [theme.breakpoints.up("xs")]: {
        height: "50vh"
      },
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      "box-sizing": "border-box"
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
