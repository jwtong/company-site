import { withStyles, createStyles, WithStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import SVG from "../SvgShapes";
import WaveBottom from "../WaveBottom";
import { useTheme } from "@material-ui/styles";
import { pageContainer } from "../SharedStyles";

const styles = (theme: any) =>
  createStyles({
    contentWrapper: {
      position: "relative",
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4)
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
      }
    },
    centerer: {
      justifyContent: "center"
    },
    titleWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    pageContainer: pageContainer(theme),
    container: {
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

interface Props extends WithStyles<typeof styles> {
  colorBottom: string;
  children?: any;
}

const Hero = ({ children, colorBottom, classes }: Props) => {
  const theme: any = useTheme();
  return (
    <>
      <div className={clsx(classes.container, classes.pageContainer)}>
        <div className={classes.upDownDiv}>
          <SVG
            animated
            icon="triangle"
            width={"12em"}
            animatedProps={{ delay: 2000 }}
            stroke={theme.palette.secondary.light}
            left="10%"
            top="20%"
          />
          <SVG
            animated
            icon="hexa"
            width={"12em"}
            animatedProps={{ delay: 2000 }}
            stroke={theme.palette.secondary.dark}
            left="60%"
            top="70%"
          />
          <SVG
            animated
            icon="box"
            width={"1.5em"}
            animatedProps={{ delay: 1000 }}
            fill={theme.palette.primary.dark}
            left="60%"
            top="15%"
          />
        </div>
        <div className={classes.upDownWideDiv}>
          <SVG
            animated
            icon="arrowUp"
            width={"4em"}
            animatedProps={{ delay: 2000 }}
            fill={theme.palette.secondary.main}
            left="80%"
            top="10%"
          />
          <SVG
            animated
            icon="triangle"
            width={"3em"}
            animatedProps={{ delay: 2000 }}
            stroke={theme.palette.secondary.main}
            left="90%"
            top="50%"
          />
          <SVG
            animated
            icon="circle"
            width={"4em"}
            animatedProps={{ delay: 1000 }}
            fill={theme.palette.primary.dark}
            left="70%"
            top="90%"
          />
          <SVG
            animated
            icon="triangle"
            width={"4em"}
            animatedProps={{ delay: 2000 }}
            stroke={theme.palette.primary.main}
            left="30%"
            top="65%"
          />
          <SVG
            animated
            icon="cross"
            width={"4em"}
            animatedProps={{ delay: 2000 }}
            stroke={theme.palette.secondary.main}
            left="28%"
            top="15%"
          />
          <SVG
            animated
            icon="circle"
            width={"1.5em"}
            animatedProps={{ delay: 1000 }}
            fill={theme.palette.primary.main}
            left="75%"
            top="10%"
          />
          <SVG
            animated
            icon="upDown"
            width={"2em"}
            animatedProps={{ delay: 1000 }}
            fill={theme.palette.primary.main}
            left="45%"
            top="10%"
          />
        </div>
        <SVG
          animated
          icon="circle"
          width={"6em"}
          animatedProps={{ delay: 1000 }}
          fill={theme.palette.primary.main}
          left="5%"
          top="70%"
        />
        <SVG
          animated
          icon="circle"
          width={"1.5em"}
          animatedProps={{ delay: 1000 }}
          fill={theme.palette.primary.main}
          left="4%"
          top="20%"
        />
        <SVG
          animated
          icon="circle"
          width={"3em"}
          animatedProps={{ delay: 1000 }}
          fill={theme.palette.primary.main}
          left="50%"
          top="60%"
        />
        <SVG
          animated
          icon="upDown"
          width={"2em"}
          animatedProps={{ delay: 1000 }}
          fill={theme.palette.primary.main}
          left="95%"
          top="90%"
        />
        <SVG
          animated
          icon="upDown"
          width={"6em"}
          animatedProps={{ delay: 1000 }}
          fill={theme.palette.primary.main}
          left="40%"
          top="80%"
        />
        <SVG
          animated
          animatedProps={{ delay: 2000 }}
          icon="triangle"
          width={"2em"}
          stroke={theme.palette.primary.main}
          left="25%"
          top="5%"
        />
        <SVG
          animated
          animatedProps={{ delay: 2000 }}
          icon="circle"
          width={"16em"}
          fill={theme.palette.secondary.main}
          left="95%"
          top="5%"
        />
        <SVG
          animated
          animatedProps={{ delay: 1000 }}
          icon="box"
          width={"16em"}
          fill={theme.palette.primary.main}
          left="5%"
          top="110%"
        />
        <SVG
          animated
          animatedProps={{ delay: 1000 }}
          icon="box"
          width={"1.5em"}
          fill={theme.palette.primary.main}
          left="10%"
          top="10%"
        />
        <SVG
          animated
          animatedProps={{ delay: 1000 }}
          icon="box"
          width={"3em"}
          fill={theme.palette.primary.main}
          left="40%"
          top="30%"
        />
        <SVG
          animated
          animatedProps={{ delay: 2000 }}
          icon="hexa"
          width={"4em"}
          stroke={theme.palette.primary.main}
          left="10%"
          top="50%"
        />
        <SVG
          animated
          animatedProps={{ delay: 2000 }}
          icon="hexa"
          width={"2em"}
          stroke={theme.palette.primary.main}
          left="80%"
          top="70%"
        />
        <div className={classes.contentWrapper}>{children}</div>
      </div>

      <WaveBottom colorTop={"black"} colorBottom={colorBottom} />
    </>
  );
};

export default withStyles(styles)(Hero);
