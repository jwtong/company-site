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

class WebScrapeDcfPage extends React.Component {
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
              Web Scrape Stock Analyzer
            </Typography>
            <Typography variant="h5" className={classes.header} gutterBottom>
              An Excel VBA driven stock analysis program that scrapes live data
              directly from Yahoo Finance, and outputs a discounted cash flow
              model along with a stock price for given parameters
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
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.webScrapeDcf1.childImageSharp.fixed} />
          </div>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "left" }}
            gutterBottom
          >
            Discounted cash-flow (DCF) is a valuation method used to estimate
            the value of an investment based on future cash flows. In layman's
            terms, it is a powerful tool that can help predict the fair value
            price of a stock. Without a Bloomberg machine, the process of
            entering data and generating such a model may take a few hours. This
            program similarly features automatic input of hundreds of fields of
            data (scraped from Yahoo Finance), and has buttons that allow for
            easy parametization, expediting the process to minutes.
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
            <Img fixed={data.webScrapeDcf2.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Built primarily with the limited Microsoft VBA, the program
            interfaces with a self-built external C# library that provides
            web-scraping capability extending beyond this one implementation.
          </Typography>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    webScrapeDcf1: file(
      relativePath: { eq: "sample_work/web-scrape-dcf/web_scrape_dcf1.png" }
    ) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    webScrapeDcf2: file(
      relativePath: { eq: "sample_work/web-scrape-dcf/web_scrape_dcf2.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(WebScrapeDcfPage);
