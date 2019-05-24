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

class ZicPage extends React.Component {
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
              Zic Web Jukebox
            </Typography>
            <Typography variant="h5" className={classes.header} gutterBottom>
              A collaborative playlist maker and music player
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
          <Grid container spacing={2} direction="row" justify="center">
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
            <Grid item>
              <StandardPopover popoverText={"Project Management"}>
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
                  <AssignmentOutlined
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
              <Chip label="HTML / CSS" />
            </Grid>
            <Grid item>
              <Chip label="Javascript / JQuery" />
            </Grid>
            <Grid item>
              <Chip label="Java (Spark)" />
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Overview
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "left" }}
            gutterBottom
          >
            A full-stack web application that allows one user to host a playlist
            on their computer, which other users can connect to and add songs of
            their choice from the SoundCloud library. As songs are added, the
            host can simultaneously sort, manage, and playback the playlist.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Design
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.zic1.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            The first step was to diagram the business-logic features and
            user-interactions of this multi-faceted program.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.zic2.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Once drafted, these considerations were translated into UML diagram
            that better defined how the features would be translated to code and
            data.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.zic3.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Next, UI/UX mockups were created to show the layout of the actual
            music player. Note that the host's interface would include more
            functionality than those of connected clients, including executive
            controls over the music playback.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Final Product
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.zic4.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            In terms of future business applications of this software, it could
            be installed into a speaker or a speaker attachment via a
            microcomputer (e.g. Raspberry Pi) or be hosted completely online.
          </Typography>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    zic1: file(relativePath: { eq: "sample_work/zic/zic1.png" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic2: file(relativePath: { eq: "sample_work/zic/zic2.png" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic3: file(relativePath: { eq: "sample_work/zic/zic3.jpg" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zic4: file(relativePath: { eq: "sample_work/zic/zic4.png" }) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(ZicPage);
