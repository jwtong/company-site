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

class BarterPage extends React.Component {
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
              Barter
            </Typography>
            <Typography variant="h5" className={classes.header} gutterBottom>
              Barter is an app concept inspired by Tinder, Snapchat, and
              Instagram that utilizes social discovery to match individuals who
              want to exchange goods.
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
              <StandardPopover popoverText={"Business Logic Analyst"}>
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
                  <BusinessCenterOutlined
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
            Technologies
          </Typography>
          <Grid justify="center" container spacing={1}>
            <Grid item>
              <Chip label="Sketch" />
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.barter1.childImageSharp.fixed} />
            <Img fixed={data.barter2.childImageSharp.fixed} />
          </div>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.barter3.childImageSharp.fixed} />
            <Img fixed={data.barter4.childImageSharp.fixed} />
          </div>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.barter5.childImageSharp.fixed} />
            <Img fixed={data.barter6.childImageSharp.fixed} />
          </div>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    barter1: file(relativePath: { eq: "sample_work/barter/barter1.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    barter2: file(relativePath: { eq: "sample_work/barter/barter2.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    barter3: file(relativePath: { eq: "sample_work/barter/barter3.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    barter4: file(relativePath: { eq: "sample_work/barter/barter4.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    barter5: file(relativePath: { eq: "sample_work/barter/barter5.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    barter6: file(relativePath: { eq: "sample_work/barter/barter6.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(BarterPage);
