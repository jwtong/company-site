import React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import { Divider, withStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";

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
  public render() {
    const { classes, data } = this.props;

    const barterRoles = [roles[1], roles[3]];
    const barterTechnologies = ["Sketch"];

    return (
      <SampleWorkTemplate
        title={"Barter"}
        subtitle={
          "Barter is an app concept inspired by Tinder, Snapchat, and Instagram that utilizes social discovery to match individuals who want to exchange goods."
        }
        roles={barterRoles}
        technologies={barterTechnologies}
      >
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
      </SampleWorkTemplate>
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
