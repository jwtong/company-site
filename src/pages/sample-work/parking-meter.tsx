import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import Img from "gatsby-image/withIEPolyfill";
import {
  Typography,
  Divider,
  withStyles,
  createStyles,
  WithStyles
} from "@material-ui/core";
import roles from "../../utils/roles";
import SampleWorkTemplate from "../../components/SampleWorkTemplate";
import SubtitleDivider from "../../components/SubtitleDivider";
import ParkingMeterPaper from "../../assets/documents/ParkingMeterPaper.pdf";
import {
  dividerWithMargin,
  topBottomImageWrapper,
  imagesContainer,
  imageShiftWrapper
} from "../../components/SharedStyles";

const styles = (theme: any) =>
  createStyles({
    dividerWithMargin: dividerWithMargin(theme),
    topBottomImageWrapper: topBottomImageWrapper(theme),
    imagesContainer: imagesContainer(theme),
    imageShiftWrapper: imageShiftWrapper(theme),
    mainImage: {
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "425px"
      }
    },
    mapImage: {
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "375px"
      }
    },
    bostonImage: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "75%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    occupancyImage: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "65%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
}

class ParkingMeterPage extends React.Component<Props> {
  public render() {
    const { classes, data } = this.props;
    const parkingMeterRoles = [roles[0], roles[1], roles[4]];
    const parkingMeterTechnologies = ["React", "Python (SciKit-Learn)"];

    const images = data.images.edges.map((e: { node: any }) => e.node);

    return (
      <SampleWorkTemplate
        title={"Parking Meter Predictive Model"}
        subtitle={
          "An analysis of parking meter transactions in San Diego and an evaluation of economic applications"
        }
        roles={parkingMeterRoles}
        technologies={parkingMeterTechnologies}
      >
        <SubtitleDivider
          text={"Overview"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <div className={classes.imagesContainer}>
          <div className={classes.imageShiftWrapper}>
            <Img
              className={classes.mainImage}
              fluid={
                _.find(
                  images,
                  (d: { name: string }) => d.name === "parkingMeter1"
                ).childImageSharp.fluid
              }
            />
          </div>
        </div>
        <Typography variant="subtitle1">
          Inspired by Donald Shoup's book "The High Cost of Free Parking", this
          project was an investigation and analysis of daily parking meter data
          from San Diego's metropolitan area. First, I created a number of
          predictive models that predicted daily meter occupancy. Next, I
          integrated the most accurate model with a web application interface.
          Lastly, I examined possible economic and social applications of the
          predictive model.
        </Typography>
        <SubtitleDivider
          text={"Data Prediction and Model"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Typography variant="subtitle1">
          Before building the predictive model, I needed to pick a set of
          features or measurable factors that I felt might have notable
          correlation with parking meter occupancy. I determined that price,
          local meter density, and accessibility were the most useful features
          from the original data set. However, these features do not help
          predict variances in daily occupancy, since they don't change each
          day.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.bostonImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "parkingMeter2"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          In order to account for differences in daily occupancy, I suspected
          there would be a correlation with weather (e.g. rainy days meant less
          demand). Using another data set from Boston's parking meters, I
          confirmed that seasonality did exhibit correlation with parking meter
          demand, likely due to weather conditions.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.occupancyImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "parkingMeter3"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          Combining a San Diego historical weather data set with the original
          parking data set, I tested 5 different classification methods. Of the
          numerous predictive models built, the random forest yielded the
          highest accuracy.
        </Typography>
        <SubtitleDivider
          text={"Web Application"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <div className={classes.imagesContainer}>
          <div className={classes.imageShiftWrapper}>
            <Img
              className={classes.mapImage}
              fluid={
                _.find(
                  images,
                  (d: { name: string }) => d.name === "parkingMeter4"
                ).childImageSharp.fluid
              }
            />
          </div>
        </div>
        <Typography variant="subtitle1">
          Using the random-forest model, I created an application that queries
          current weather data for San Diego and displays predictions of each
          meter's occupancy for the day on a zoomable and clickable interactive
          map. This application serves as a proof-of-concept for a website or
          integration into Google Maps that consumers might reference when
          attempting to find parking on a certain day.
        </Typography>
        <SubtitleDivider
          text={"Economic Analysis"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Typography variant="subtitle1">
          In the end, the predictive power of the final data model was limited,
          but could be significantly improved with better and more features.
          Nonetheless, the project provides an optimistic outlook into how data
          analysis could empower city planners to make better decisions on
          behalf of consumers and to generate city revenue. For one, it could
          guide policy makers on where to build new parking meters and where to
          remove existing ones. It could also allow them to simulate different
          scenarios (e.g. pricing changes) that could improve the economic
          efficiency of the meters.
        </Typography>
        <Divider variant="middle" className={classes.dividerWithMargin} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2%"
          }}
        >
          <Button
            aria-label="View Paper"
            href={ParkingMeterPaper}
            variant="outlined"
            color="secondary"
          >
            View Paper
          </Button>
        </div>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "sample_work/parking-meter" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ParkingMeterPage);
