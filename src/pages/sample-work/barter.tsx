import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import { Divider, withStyles, createStyles } from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";

const styles = theme =>
  createStyles({
    image: {
      width: "40%",
      [theme.breakpoints.down("xs")]: {
        width: "90%"
      }
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3)
    },
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
      }
    }
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
        <Divider variant="middle" className={classes.divider} />

        <div className={classes.imageWrapper}>
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
        <div className={classes.imageWrapper}>
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
        <div className={classes.imageWrapper}>
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
        <Divider variant="middle" className={classes.divider} />
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
