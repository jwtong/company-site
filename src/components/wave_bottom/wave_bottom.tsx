import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import WaveBottomSVG from "../../assets/svg/wave_bottom.svg";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

const styles = createStyles({
  svg: {
    "& path": {
      fill: props => props.colorTop
    },
    height: "100%",
    width: "100%",
    backgroundColor: props => props.colorBottom,
    transform: props => (props.flip ? "scale(-1,1)" : null)
  }
});

interface Props extends WithStyles<typeof styles> {
  colorTop?: string;
  colorBottom?: string;
  flip?: boolean;
  width: Breakpoint;
}

const WaveBottom = ({ colorTop, colorBottom, flip, classes }: Props) => {
  return <WaveBottomSVG className={classes.svg} display={"block"} />;
};

WaveBottom.defaultProps = {
  colorTop: "white",
  colorBottom: null,
  flip: false
};

export default withStyles(styles)(WaveBottom);
