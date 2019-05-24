import React from "react";
import { Link, graphql, navigate } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import Grid from "@material-ui/core/Grid";
import Img from "gatsby-image/withIEPolyfill";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  GridListTile,
  GridList,
  GridListTileBar
} from "@material-ui/core";

const useStyles = makeStyles({
  mIcon: {
    color: "black"
  },
  "@keyframes anim": {
    from: { transform: "scale(1.0)", filter: "grayscale(0%)" },
    to: { transform: "scale(1.1)", filter: "grayscale(60%)" }
  },
  gridTile: {
    "&:hover $tileTitle": {
      opacity: 100
    },
    "&:hover img": {
      animationName: "$anim",
      animationDuration: ".3s",
      transform: "scale(1.1)",
      filter: "grayscale(60%)"
    }
  },
  tileTitle: {
    opacity: 0
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  centerer: {
    justifyContent: "center"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const SampleWorkPage = ({ data }: { data: any }) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundColor: "orange",
          justifyContent: "center"
        }}
      >
        <GridList style={{ width: "810px" }} cellHeight={270} cols={3}>
          <GridListTile
            cols={1}
            rows={1}
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/juggle");
            }}
            className={classes.gridTile}
          >
            <Img
              style={{ backgroundColor: "white", height: "100%" }}
              objectFit="cover"
              fluid={data.juggleLogo.childImageSharp.fluid}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Juggle Mobile App"}
            />
          </GridListTile>
          <GridListTile
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/parking-meter");
            }}
            cols={1}
            rows={1}
            className={classes.gridTile}
          >
            <Img
              fluid={data.parkingMeterLogo.childImageSharp.fluid}
              objectFit="cover"
              style={{ height: "100%" }}
              alt={"Parking Meter Predictive Model"}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Parking Meter Predictive Model"}
            />
          </GridListTile>
          <GridListTile
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/recipe-builder");
            }}
            cols={1}
            rows={1}
            className={classes.gridTile}
          >
            <Img
              fluid={data.recipeBuilderLogo.childImageSharp.fluid}
              objectFit="cover"
              style={{ height: "100%" }}
              alt={"Computer Vision Recipe Builder"}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Computer Vision Recipe Builder"}
            />
          </GridListTile>
          <GridListTile
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/zic");
            }}
            cols={1}
            rows={1}
            className={classes.gridTile}
          >
            <Img
              objectFit="cover"
              style={{ height: "100%" }}
              fluid={data.zicLogo.childImageSharp.fluid}
              alt={"Zic"}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Zic Web Jukebox"}
            />
          </GridListTile>
          <GridListTile
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/barter");
            }}
            cols={1}
            rows={1}
            className={classes.gridTile}
          >
            <Img
              objectFit="cover"
              style={{ height: "100%" }}
              fluid={data.barterLogo.childImageSharp.fluid}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Barter App UI/UX"}
            />
          </GridListTile>
          <GridListTile
            onClick={event => {
              event.preventDefault();
              navigate("/sample-work/web-scrape-dcf");
            }}
            cols={1}
            rows={1}
            className={classes.gridTile}
          >
            <Img
              objectFit="cover"
              style={{ height: "100%" }}
              fluid={data.webScrapeDcfLogo.childImageSharp.fluid}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Web Scrape Stock Analyzer"}
            />
          </GridListTile>
        </GridList>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    juggleLogo: file(relativePath: { eq: "sample_work/juggle/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    barterLogo: file(relativePath: { eq: "sample_work/barter/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    zicLogo: file(relativePath: { eq: "sample_work/zic/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recipeBuilderLogo: file(
      relativePath: { eq: "sample_work/recipe-builder/logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parkingMeterLogo: file(
      relativePath: { eq: "sample_work/parking-meter/logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    webScrapeDcfLogo: file(
      relativePath: { eq: "sample_work/web-scrape-dcf/logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SampleWorkPage;
