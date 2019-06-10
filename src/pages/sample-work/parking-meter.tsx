import React from "react";
import { Link, graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  withStyles,
  Chip
} from "@material-ui/core";
import StandardPopover from "../../components/standard_popover";
import Img from "gatsby-image/withIEPolyfill";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";
import roles from "../../utils/roles";
import SampleWorkTemplate from "../../components/sample_work_template";
import SubtitleDivider from "../../components/subtitle_divider";

const styles = {
  mIcon: {
    color: "black"
  },
  header: {
    color: "white !important"
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
};

class ParkingMeterPage extends React.Component {
  public render() {
    const { classes, data } = this.props;
    const parkingMeterRoles = [roles[0], roles[1], roles[4]];
    const parkingMeterTechnologies = ["React", "Python (SciKit-Learn)"];

    return (
      <SampleWorkTemplate
        title={"Parking Meter Predictive Model"}
        subtitle={
          "An analysis of parking meter transactions in San Diego and an evaluation of economic applications (Brown University Senior Capstone Project)"
        }
        roles={parkingMeterRoles}
        technologies={parkingMeterTechnologies}
      >
        <SubtitleDivider
          text={"Overview"}
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3%"
          }}
        >
          <Img
            style={{ width: "80%" }}
            fluid={data.main.childImageSharp.fluid}
          />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
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
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
        <Typography variant="subtitle1" style={{}}>
          Before building the predictive model, I needed to pick a set of
          features or measurable factors that I felt might have notable
          correlation with parking meter occupancy. I determined that price,
          local meter density, and accessibility were the most useful features
          from the original data set. However, these features do not help
          predict variances in daily occupancy, since they don't change each
          day.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3%",
            marginTop: "3%"
          }}
        >
          <Img
            style={{ width: "60%" }}
            fluid={data.bostonChart.childImageSharp.fluid}
          />
        </div>
        <Typography variant="subtitle1" style={{}}>
          In order to account for differences in daily occupancy, I suspected
          there would be a correlation with weather (e.g. rainy days meant less
          demand). Using another data set from Boston's parking meters, I
          confirmed that seasonality did exhibit correlation with parking meter
          demand, likely due to weather conditions.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1%",
            marginTop: "1%"
          }}
        >
          <Img
            style={{ width: "50%" }}
            fluid={data.occupancyPrediction.childImageSharp.fluid}
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
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3%",
            marginTop: "3%"
          }}
        >
          <Img
            style={{ width: "80%" }}
            fluid={data.map1.childImageSharp.fluid}
          />
        </div>
        <Typography variant="subtitle1" style={{}}>
          Using the random-forest model, I created an application that queries
          current weather data for San Diego and displays predictions of each
          meter's occupancy for the day on a zoomable and clickable interactive
          map. This application serves as a proof-of-concept for a website or
          integration into Google Maps that consumers might reference when
          attempting to find parking on a certain day.
        </Typography>
        <SubtitleDivider
          text={"Economic Analysis"}
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
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
        <Divider
          variant="middle"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2%"
          }}
        >
          <Button href={"/"} variant="outlined" color="secondary">
            View Paper
          </Button>
        </div>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    main: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bostonChart: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    occupancyPrediction: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    map1: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    map2: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter5.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ParkingMeterPage);
