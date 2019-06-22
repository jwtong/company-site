import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import { Divider, withStyles, createStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/SampleWorkTemplate";
import roles from "../../utils/roles";
import {
  dividerWithMargin,
  imagesContainer
} from "../../components/SharedStyles";

const styles = (theme: any) =>
  createStyles({
    image: {
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "50%"
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%"
      }
    },
    imagesContainer: imagesContainer(theme),
    dividerWithMargin: dividerWithMargin(theme)
  });

class BarterPage extends React.Component {
  public render() {
    const { classes, data } = this.props;

    const barterRoles = [roles[1], roles[3]];
    const barterTechnologies = ["Sketch"];
    const images = data.images.edges.map((e: { node: any }) => e.node);

    return (
      <SampleWorkTemplate
        title={"Barter"}
        subtitle={
          "Barter is an app concept inspired by Tinder, Snapchat, and Instagram that utilizes social discovery to match individuals who want to exchange goods."
        }
        roles={barterRoles}
        technologies={barterTechnologies}
      >
        <Divider variant="middle" className={classes.dividerWithMargin} />

        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter1")
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter2")
                .childImageSharp.fluid
            }
          />
        </div>
        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter3")
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter4")
                .childImageSharp.fluid
            }
          />
        </div>
        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter5")
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === "barter6")
                .childImageSharp.fluid
            }
          />
        </div>
        <Divider variant="middle" className={classes.dividerWithMargin} />
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "sample_work/barter" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(BarterPage);
