import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import { Typography, withStyles, createStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/SampleWorkTemplate";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/SubtitleDivider";
import {
  dividerWithMargin,
  topBottomImageWrapper
} from "../../components/SharedStyles";

const styles = theme =>
  createStyles({
    dividerWithMargin: dividerWithMargin(theme),
    topBottomImageWrapper: topBottomImageWrapper(theme),
    mainImage: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "90%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    sensitivityImage: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "70%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    }
  });

class WebScrapeDcfPage extends React.Component {
  public render() {
    const { classes, data } = this.props;
    const webScrapeDcfRoles = [roles[0], roles[4]];
    const webScrapeDcfTechnologies = ["C#", "Excel VBA"];

    const images = data.images.edges.map((e: { node: any }) => e.node);

    console.log(images);

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
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.mainImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "webScrapeDcf1"
              ).childImageSharp.fluid
            }
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
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "webScrapeDcf2"
              ).childImageSharp.fluid
            }
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
    images: allFile(
      filter: { relativeDirectory: { eq: "sample_work/web-scrape-dcf" } }
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

export default withStyles(styles, { withTheme: true })(WebScrapeDcfPage);
