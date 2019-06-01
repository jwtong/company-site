import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useSpring, animated } from "react-spring";
import { Spring, config } from "react-spring/renderprops";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    color: (props: any) => props.stroke,
    stroke: (props: any) => props.stroke,
    width: (props: any) => props.width,
    fill: (props: any) => props.fill,
    left: (props: any) => props.left,
    top: (props: any) => props.top,
    overflow: "visible"
  }
});

const icons: any = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeDasharray="82"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: "0 0 30 30"
  },
  circle: {
    shape: (
      <path
        strokeLinejoin="round"
        strokeDasharray="150"
        d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
      />
    ),
    viewBox: "0 0 30 30"
  },
  arrowUp: {
    shape: (
      <>
        <path
          strokeDasharray="141"
          d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z"
        />{" "}
        <path
          strokeDasharray="141"
          d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z"
        />
      </>
    ),
    viewBox: "0 0 30 42"
  },
  upDown: {
    shape: (
      <>
        <path
          strokeDasharray="99"
          d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z"
        />
        <path
          strokeDasharray="99"
          d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z"
        />
      </>
    ),
    viewBox: "0 0 30 44.58"
  },
  box: {
    shape: (
      <path
        strokeDasharray="221"
        d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z"
      />
    ),
    viewBox: "0 0 30 30"
  },
  hexa: {
    shape: (
      <polygon
        strokeDasharray="100"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: "0 0 30 30"
  },
  cross: {
    shape: (
      <path
        strokeDasharray="487"
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: "0 0 100 100"
  },
  star: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeDasharray="156"
        points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994 "
      />
    ),
    viewBox: "0 0 45 44"
  }
};

interface Props {
  stroke: string;
  fill: string;
  width: string;
  icon: any;
  left: string;
  top: string;
  animated?: boolean;
  animatedProps?: any;
}

const SVG = ({
  stroke,
  fill,
  width,
  icon,
  left,
  top,
  animated,
  animatedProps
}: Props) => {
  const classes = useStyles({
    stroke,
    fill,
    width,
    icon,
    left,
    top
  });

  if (animated && stroke !== "transparent") {
    let strokeDasharray = parseInt(icons[icon].shape.props.strokeDasharray);
    if (!strokeDasharray && icons[icon].shape.props.children) {
      strokeDasharray =
        icons[icon].shape.props.children[0].props.strokeDasharray;
    }
    return (
      <Spring
        config={config.molasses}
        from={{ x: strokeDasharray || 0 }}
        to={{ x: 0 }}
        {...animatedProps}
      >
        {(props: any) => (
          <svg
            className={classes.root}
            viewBox={icons[icon].viewBox}
            strokeDashoffset={props.x}
          >
            {icons[icon].shape}
          </svg>
        )}
      </Spring>
    );
  } else if (animated && fill !== "none") {
    return (
      <Spring
        config={config.molasses}
        from={{ x: 0 }}
        to={{ x: 1 }}
        {...animatedProps}
      >
        {(props: any) => {
          return (
            <svg
              className={classes.root}
              viewBox={icons[icon].viewBox}
              opacity={props.x}
            >
              {icons[icon].shape}
            </svg>
          );
        }}
      </Spring>
    );
  }

  return (
    <svg viewBox={icons[icon].viewBox} className={classes.root}>
      {icons[icon].shape}
    </svg>
  );
};

SVG.defaultProps = {
  stroke: "transparent",
  width: 8,
  fill: "none",
  left: "0%",
  top: "0%"
};

export default SVG;
