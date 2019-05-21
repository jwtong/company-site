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
  withStyles
} from "@material-ui/core";
import StandardPopover from "../../components/standard_popover";
import Img from "gatsby-image/withIEPolyfill";
import Slide from "@material-ui/core/Slide";
import VisibilitySensor from "react-visibility-sensor";

const styles = {
  mIcon: {
    color: "black"
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
};

class ParkingMeterPage extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      element1: false
    };
  }

  private onChange = elementId => isVisible => {
    console.log(isVisible);
    if (isVisible) {
      this.setState({
        [elementId]: true
      });
    }
  };

  public render() {
    const { classes, data } = this.props;
    return (
      <>
        <div
          className={classes.container}
          style={{
            backgroundColor: "orange",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingRight: "10%",
              paddingLeft: "10%",
              alignItems: "center"
            }}
          >
            <Typography variant="h2" className={classes.header} gutterBottom>
              Parking Meter Predictive Model
            </Typography>
            <Typography variant="h5" className={classes.header} gutterBottom>
              An analysis of parking meter transactions in San Diego and an
              evaluation of economic applications (Brown University Senior
              Capstone Project)
            </Typography>
          </div>
        </div>
        <div
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            padding: "0% 15% 0% 15%",
            alignItems: "stretch"
          }}
        >
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Services Provided
          </Typography>
          <Grid container spacing={40} direction="row" justify="center">
            <Grid item>
              <StandardPopover popoverText={"Software Developer"}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexGrow: "1",
                    // backgroundColor: "red",
                    padding: "2% 5% 2% 5%",
                    fontSize: "4em",
                    height: "70px",
                    width: "70px"
                  }}
                >
                  <Code fontSize="inherit" className={classes.mIcon} />
                </Card>
              </StandardPopover>
            </Grid>
            <Grid item>
              <StandardPopover popoverText={"UI/UX Designer"}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexGrow: "1",
                    // backgroundColor: "red",
                    padding: "2% 5% 2% 5%",
                    fontSize: "4em",
                    height: "70px",
                    width: "70px"
                  }}
                >
                  <PaletteOutlined
                    fontSize="inherit"
                    className={classes.mIcon}
                  />
                </Card>
              </StandardPopover>
            </Grid>
            <Grid item>
              <StandardPopover popoverText={"Data Analyst"}>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    flexGrow: "1",
                    // backgroundColor: "red",
                    padding: "2% 5% 2% 5%",
                    fontSize: "4em",
                    height: "70px",
                    width: "70px"
                  }}
                >
                  <InsertChartOutlined
                    fontSize="inherit"
                    className={classes.mIcon}
                  />
                </Card>
              </StandardPopover>
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Overview
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.main.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Inspired by Donald Shoup's book "The High Cost of Free Parking",
            this project was an investigation and analysis of daily parking
            meter data from San Diego's metropolitan area. First, I created a
            number of predictive models that predicted daily meter occupancy.
            Next, I integrated the most accurate model with a web application
            interface. Lastly, I examined possible economic and social
            applications of the predictive model.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Data Prediction and Model
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
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
            <Img fixed={data.bostonChart.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            In order to account for differences in daily occupancy, I suspected
            there would be a correlation with weather (e.g. rainy days meant
            less demand). Using another data set from Boston's parking meters, I
            confirmed that seasonality did exhibit correlation with parking
            meter demand, likely due to weather conditions.
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
            <Img fixed={data.occupancyPrediction.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Combining a San Diego historical weather data set with the original
            parking data set, I tested 5 different classification methods. Of
            the numerous predictive models built, the random forest yielded the
            highest accuracy.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Web Application
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
            <Img fixed={data.map1.childImageSharp.fixed} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%",
              marginTop: "3%"
            }}
          >
            <Img fixed={data.map2.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Using the random-forest model, I created an application that queries
            current weather data for San Diego and displays predictions of each
            meter's occupancy for the day on a zoomable and clickable
            interactive map. This application serves as a proof-of-concept for a
            website or integration into Google Maps that consumers might
            reference when attempting to find parking on a certain day.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Economic Analysis
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            In the end, the predictive power of the final data model was
            limited, but could be significantly improved with better and more
            features. Nonetheless, the project provides an optimistic outlook
            into how data analysis could empower city planners to make better
            decisions on behalf of consumers and to generate city revenue. For
            one, it could guide policy makers on where to build new parking
            meters and where to remove existing ones. It could also allow them
            to simulate different scenarios (e.g. pricing changes) that could
            improve the economic efficiency of the meters.
          </Typography>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    main: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter1.png" }
    ) {
      childImageSharp {
        fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bostonChart: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter2.png" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    occupancyPrediction: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter3.png" }
    ) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    map1: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter4.png" }
    ) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    map2: file(
      relativePath: { eq: "sample_work/parking-meter/parking_meter5.png" }
    ) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ParkingMeterPage);
