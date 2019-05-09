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
        <GridList style={{ width: "540px" }} cellHeight={180} cols={3}>
          <GridListTile
            cols={1}
            rows={1}
            onClick={event => {
              event.preventDefault();

              // TODO: do something with form values
              navigate("/sample-work/juggle");
            }}
            className={classes.gridTile}
          >
            <Img
              style={{ backgroundColor: "white", height: "100%" }}
              objectFit="contain"
              fluid={data.juggleLogo.childImageSharp.fluid}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Juggle Mobile App"}
            />
          </GridListTile>
          <GridListTile cols={2} rows={1} className={classes.gridTile}>
            <Img
              fluid={data.parkingMeterMain.childImageSharp.fluid}
              style={{ height: "100%" }}
              alt={"Parking Meter Predictive Model"}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Parking Meter Predictive Model"}
            />
          </GridListTile>
          <GridListTile cols={2} rows={1} className={classes.gridTile}>
            <Img
              fluid={data.recipeBuilderMain.childImageSharp.fluid}
              objectFit="contain"
              style={{ height: "100%" }}
              alt={"Computer Vision Recipe Builder"}
            />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Computer Vision Recipe Builder"}
            />
          </GridListTile>
          <GridListTile cols={1} rows={1} className={classes.gridTile}>
            <Img fluid={data.zicLogo.childImageSharp.fluid} alt={"Zic"} />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Zic Web Jukebox"}
            />
          </GridListTile>
          <GridListTile cols={1} rows={1} className={classes.gridTile}>
            <Img fluid={data.barterLogo.childImageSharp.fluid} />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Barter App UI/UX"}
            />
          </GridListTile>
          <GridListTile cols={2} rows={1} className={classes.gridTile}>
            <Img fluid={data.webScrapeDcfMain.childImageSharp.fluid} />
            <GridListTileBar
              className={classes.tileTitle}
              title={"Web Scraping Stock Price Analyzer"}
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
    recipeBuilderMain: file(
      relativePath: { eq: "sample_work/recipe_builder/main.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    parkingMeterMain: file(
      relativePath: { eq: "sample_work/parking_meter/main.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 809) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    webScrapeDcfMain: file(
      relativePath: { eq: "sample_work/web_scrape_dcf/main.png" }
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
