import React from "react";
import { graphql, navigate } from "gatsby";

import {
  Typography,
  GridListTileBar,
  createStyles,
  withStyles,
  WithStyles,
  withWidth
} from "@material-ui/core";
import Hero from "../../components/Hero";
import TransitionGridList from "../../components/TransitionGridList";
import Img from "gatsby-image/withIEPolyfill";
import { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme =>
  createStyles({
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
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    juggleGridTile: {
      backgroundColor: "white"
    }
  });

interface Props extends WithStyles<typeof styles> {}

class SampleWorkPage extends React.Component<Props> {
  private shuffle = (array: Array<any>) => {
    return array.sort(() => Math.random() - 0.5);
  };

  private getGridListTileData(sampleWorkData: any, classes: any) {
    const delays = this.shuffle(
      Array.from(Array(sampleWorkData.length), (_, index) => index * 300)
    );

    return sampleWorkData.map((swd: any, index: number) => {
      return {
        delay: isWidthDown("xs", this.props.width) ? 500 : delays[index],
        props: {
          cols: swd.cols,
          rows: swd.rows,
          onClick: (event: any) => {
            event.preventDefault();
            navigate(swd.url);
          },
          className: classes.gridTile
        },
        children: (
          <div style={{ width: "100%", height: "100%" }}>
            <Img
              style={{ height: "100%" }}
              className={swd.customClassname}
              objectFit="cover"
              fluid={swd.fluidImage}
              alt={swd.title}
            />
            <GridListTileBar className={classes.tileTitle} title={swd.title} />
          </div>
        )
      };
    });
  }

  public render() {
    const { classes, data, width } = this.props;
    const sampleWorkData = [
      {
        title: "Juggle Mobile App",
        url: "/sample-work/juggle",
        customClassname: classes.juggleGridTile,
        fluidImage: data.juggleLogo.childImageSharp.fluid,
        imageStyle: { backgroundColor: "white " },
        cols: 1,
        rows: 1
      },
      {
        title: "Parking Meter Predictive Model",
        url: "/sample-work/parking-meter",
        fluidImage: data.parkingMeterLogo.childImageSharp.fluid,
        cols: 1,
        rows: 1
      },
      {
        title: "Computer Vision Recipe Builder",
        url: "/sample-work/recipe-builder",
        fluidImage: data.recipeBuilderLogo.childImageSharp.fluid,
        cols: 1,
        rows: 1
      },
      {
        title: "Zic Web Jukebox",
        url: "/sample-work/zic",
        fluidImage: data.zicLogo.childImageSharp.fluid,
        cols: 1,
        rows: 1
      },
      {
        title: "Barter App UI/UX",
        url: "/sample-work/barter",
        fluidImage: data.barterLogo.childImageSharp.fluid,
        cols: 1,
        rows: 1
      },
      {
        title: "Web Scrape Stock Analyzer",
        url: "/sample-work/web-scrape-dcf",
        fluidImage: data.webScrapeDcfLogo.childImageSharp.fluid,
        cols: 1,
        rows: 1
      }
    ];

    let columns;
    if (isWidthDown("xs", width)) {
      columns = 1;
    } else if (isWidthDown("sm", width)) {
      columns = 2;
    } else {
      columns = sampleWorkData.length / 2;
    }
    const gridListTileData = this.getGridListTileData(sampleWorkData, classes);
    return (
      <>
        <Hero colorBottom={"white"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center"
            }}
          >
            <Typography variant="h1" className={classes.header} gutterBottom>
              Sample Work
            </Typography>
            <Typography component="h2" variant="h4" className={classes.header}>
              Some examples of our previous work
            </Typography>
          </div>
        </Hero>
        <div className={classes.container}>
          <TransitionGridList
            transitionType={"Zoom"}
            individualVisibility={isWidthDown("xs", width)}
            visibilitySensorProps={{ partialVisibility: true }}
            transitionProps={{ timeout: { enter: 500 } }}
            gridListProps={{
              style: {
                width: `${columns * 270}px`,
                backgroundColor: "white"
              },
              cellHeight: 270,
              cols: columns,
              spacing: 10
            }}
            gridListTileData={gridListTileData}
          />
        </div>
      </>
    );
  }
}

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

export default withWidth()(withStyles(styles)(SampleWorkPage));
