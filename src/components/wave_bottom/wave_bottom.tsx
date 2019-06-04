import { makeStyles } from "@material-ui/core";
import React from "react";
import WaveBottomSVG from "../../assets/svg/wave_bottom.svg";

const useStyles = makeStyles({
  bottomWrapper: {
    display: "flex"
  },
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

interface Props {
  colorTop?: string;
  colorBottom?: string;
  flip?: boolean;
}

const WaveBottom = ({ colorTop, colorBottom, flip }: Props) => {
  const classes = useStyles({ colorTop, colorBottom, flip });
  return (
    <div className={classes.bottomWrapper}>
      <WaveBottomSVG className={classes.svg} />
    </div>
  );
};

WaveBottom.defaultProps = {
  colorTop: "white",
  colorBottom: null,
  flip: false
};

export default WaveBottom;
