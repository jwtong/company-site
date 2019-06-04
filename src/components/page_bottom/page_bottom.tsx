import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import WaveBottom from "../wave_bottom";
import { useTheme } from "@material-ui/styles";

const styles = createStyles({
  container: {
    width: "100vw",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});

interface Props extends WithStyles<typeof styles> {
  children: any;
  colorTop?: string;
}

const PageBottom = ({ children, colorTop, classes }: Props) => {
  return (
    <>
      <WaveBottom colorBottom="black" />
      <div className={classes.container}>{children}</div>
    </>
  );
};

PageBottom.defaultProps = {
  colorTop: "white"
};

export default withStyles(styles)(PageBottom);
