import React from "react";
import { graphql } from "gatsby";
import { Typography, withStyles, createStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/subtitle_divider";

const styles = theme =>
  createStyles({
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    },
    topBottomImageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3)
    },
    mainImage: {
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    },
    sensitivityImage: {
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    }
  });

class WebScrapeDcfPage extends React.Component {
  public render() {
    const { classes, data } = this.props;
    const webScrapeDcfRoles = [roles[0], roles[4]];
    const webScrapeDcfTechnologies = ["C#", "Excel VBA"];

    return (
      <SampleWorkTemplate
        title={"Web Scrape Stock Analyzer"}
        subtitle={
          "An Excel VBA driven stock analysis program that scrapes live data directly from Yahoo Finance, and outputs a discounted cash flow model along with a stock price for given parameters"
        }
        roles={webScrapeDcfRoles}
        technologies={webScrapeDcfTechnologies}
      >
        <SubtitleDivider
          text={"Overview"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.mainImage}
            fluid={data.webScrapeDcf1.childImageSharp.fluid}
          />
        </div>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "left" }}
          gutterBottom
        >
          Discounted cash-flow (DCF) is a valuation method used to estimate the
          value of an investment based on future cash flows. In layman's terms,
          it is a powerful tool that can help predict the fair value price of a
          stock. Without a Bloomberg machine, the process of entering data and
          generating such a model may take a few hours. This program similarly
          features automatic input of hundreds of fields of data (scraped from
          Yahoo Finance), and has buttons that allow for easy parametization,
          expediting the process to minutes.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.sensitivityImage}
            fluid={data.webScrapeDcf2.childImageSharp.fluid}
          />
        </div>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Built primarily with the limited Microsoft VBA, the program interfaces
          with a self-built external C# library that provides web-scraping
          capability extending beyond this one implementation.
        </Typography>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    webScrapeDcf1: file(
      relativePath: { eq: "sample_work/web-scrape-dcf/web_scrape_dcf1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    webScrapeDcf2: file(
      relativePath: { eq: "sample_work/web-scrape-dcf/web_scrape_dcf2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(WebScrapeDcfPage);
