import React from "react";
import { graphql } from "gatsby";
import { Typography, withStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/subtitle_divider";

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
          containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
        />
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
          Discounted cash-flow (DCF) is a valuation method used to estimate the
          value of an investment based on future cash flows. In layman's terms,
          it is a powerful tool that can help predict the fair value price of a
          stock. Without a Bloomberg machine, the process of entering data and
          generating such a model may take a few hours. This program similarly
          features automatic input of hundreds of fields of data (scraped from
          Yahoo Finance), and has buttons that allow for easy parametization,
          expediting the process to minutes.
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
