import {
  Card,
  Grid,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  makeStyles
} from "@material-ui/core";
import React from "react";
import SVG from "../svg_shapes";
import WaveBottom from "../wave_bottom";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  centerer: {
    justifyContent: "center"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "black"
  },
  "@keyframes upDownWide": {
    from: {
      transform: "translateY(0)"
    },
    to: {
      transform: "translateY(200px)"
    }
  },
  "@keyframes upDown": {
    from: {
      transform: "translateY(0)"
    },
    to: {
      transform: "translateY(30px)"
    }
  },
  upDownDiv: {
    animationName: "$upDown",
    animation: "$upDown 4s ease-in-out infinite alternate",
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  upDownWideDiv: {
    animationName: "$upDownWide",
    width: "100%",
    height: "100%",
    position: "absolute",
    animation: "$upDownWide 18s ease-in-out infinite alternate"
  }
});

interface Props extends WithStyles<typeof useStyles> {
  children: any;
  colorBottom: string;
}

const Hero = ({ children, colorBottom }: Props) => {
  const classes = useStyles({ colorBottom });
  const theme: any = useTheme();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.upDownDiv}>
          <SVG
            animated
            icon="triangle"
            width={"12rem"}
            stroke={theme.palette.secondary.light}
            left="10%"
            top="20%"
          />
          <SVG
            animated
            icon="hexa"
            width={"12rem"}
            stroke={theme.palette.secondary.dark}
            left="60%"
            top="70%"
          />
          <SVG
            animated
            icon="box"
            width={"1.5rem"}
            fill={theme.palette.primary.dark}
            left="60%"
            top="15%"
          />
        </div>
        <div className={classes.upDownWideDiv}>
          <SVG
            animated
            icon="arrowUp"
            width={"4rem"}
            fill={theme.palette.secondary.main}
            left="80%"
            top="10%"
          />
          <SVG
            animated
            icon="triangle"
            width={"3rem"}
            stroke={theme.palette.secondary.main}
            left="90%"
            top="50%"
          />
          <SVG
            animated
            icon="circle"
            width={"4rem"}
            fill={theme.palette.primary.dark}
            left="70%"
            top="90%"
          />
          <SVG
            animated
            icon="triangle"
            width={"4rem"}
            stroke={theme.palette.primary.main}
            left="30%"
            top="65%"
          />
          <SVG
            animated
            icon="cross"
            width={"4rem"}
            stroke={theme.palette.secondary.main}
            left="28%"
            top="15%"
          />
          <SVG
            animated
            icon="circle"
            width={"1.5rem"}
            fill={theme.palette.primary.main}
            left="75%"
            top="10%"
          />
          <SVG
            animated
            icon="upDown"
            width={"2rem"}
            fill={theme.palette.primary.main}
            left="45%"
            top="10%"
          />
        </div>
        <SVG
          animated
          icon="circle"
          width={"6rem"}
          fill={theme.palette.primary.main}
          left="5%"
          top="70%"
        />
        <SVG
          animated
          icon="circle"
          width={"1.5rem"}
          fill={theme.palette.primary.main}
          left="4%"
          top="20%"
        />
        <SVG
          animated
          icon="circle"
          width={"3rem"}
          fill={theme.palette.primary.main}
          left="50%"
          top="60%"
        />
        <SVG
          animated
          icon="upDown"
          width={"2rem"}
          fill={theme.palette.primary.main}
          left="95%"
          top="90%"
        />
        <SVG
          animated
          icon="upDown"
          width={"6rem"}
          fill={theme.palette.primary.main}
          left="40%"
          top="80%"
        />
        <SVG
          animated
          icon="triangle"
          width={"2rem"}
          stroke={theme.palette.primary.main}
          left="25%"
          top="5%"
        />
        <SVG
          animated
          icon="circle"
          width={"16rem"}
          fill={theme.palette.secondary.main}
          left="95%"
          top="5%"
        />
        <SVG
          animated
          icon="box"
          width={"16rem"}
          fill={theme.palette.primary.main}
          left="5%"
          top="110%"
        />
        <SVG
          animated
          icon="box"
          width={"1.5rem"}
          fill={theme.palette.primary.main}
          left="10%"
          top="10%"
        />
        <SVG
          animated
          icon="box"
          width={"3rem"}
          fill={theme.palette.primary.main}
          left="40%"
          top="30%"
        />
        <SVG
          animated
          icon="hexa"
          width={"4rem"}
          stroke={theme.palette.primary.main}
          left="10%"
          top="50%"
        />
        <SVG
          animated
          icon="hexa"
          width={"2rem"}
          stroke={theme.palette.primary.main}
          left="80%"
          top="70%"
        />
        <div style={{ position: "relative" }}>{children}</div>
      </div>
      <WaveBottom colorTop={"black"} colorBottom={colorBottom} />
    </>
  );
};

export default Hero;
