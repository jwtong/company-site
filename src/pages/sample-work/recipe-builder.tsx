import React from "react";
import _ from "lodash";
import { graphql } from "gatsby";
import {
  Typography,
  withStyles,
  createStyles,
  withWidth
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import SampleWorkTemplate from "../../components/sample_work_template";
import roles from "../../utils/roles";
import SubtitleDivider from "../../components/subtitle_divider";
import { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme =>
  createStyles({
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3)
    },
    topBottomImageWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3)
    },
    confusionMatrixImage: {
      width: "60%",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    shelfImage: {
      width: "50%",
      [theme.breakpoints.down("xs")]: {
        width: "80%"
      }
    },
    stepsWrapper: {
      paddingTop: theme.spacing(2)
    },
    stepWrapper: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      display: "flex",
      justifyContent: "flex-start"
    },
    stepNumber: {
      marginRight: theme.spacing(3)
    },
    applicationImage: {
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "500px"
      }
    },
    applicationImage2: {
      marginLeft: "-300px"
    },
    applicationImageSmallWrapper: { overflow: "hidden" }
  });

class RecipeBuilderPage extends React.Component {
  public render() {
    const { classes, data, width } = this.props;
    const recipeBuilderRoles = [roles[0], roles[4]];
    const recipeBuilderTechnologies = ["Java", "MATLAB"];

    const images = data.images.edges.map((e: { node: any }) => e.node);

    const applicationSteps = [
      "Select images",
      "Connect to Matlab through Java",
      "Classify images in Matlab and return results to GUI",
      "Call “What’s in the Fridge” API on results",
      "Display Recipes"
    ];

    return (
      <SampleWorkTemplate
        title={"Computer Vision Recipe Builder"}
        subtitle={
          "A computer vision app that allows you to take pictures of your pantry, recognizes what food you have, and tells you what recipes you can cook right away"
        }
        roles={recipeBuilderRoles}
        technologies={recipeBuilderTechnologies}
      >
        <SubtitleDivider
          text={"Overview"}
          otherProps={{ className: classes.divider }}
        />
        <Typography variant="subtitle1">
          This project was split into three distinct parts, together
          demonstrating proof-of-concept functionality for a possible mobile
          app. The first part consists of training a neural-network to recognize
          discrete food items. The second part consists of developing an image
          recognition algorithm to split a compound image of food items into
          discrete food items. The third part consists of combining the
          neural-network with the Spoonacular API as a Java application to demo
          recipe synthesis.
        </Typography>
        <SubtitleDivider
          text={"Training the Neural Network on Food"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.imageWrapper}>
          <Img
            className={classes.confusionMatrixImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder2"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          We retrained the existing SVM AlexNet to handle food recognition,
          specifically from hundreds of stock food images, although we decided
          to select only a set of 23 common foods which this SVM could recognize
          (rather than having it recognize many foods, which could require
          millions of images). As shown above, we were able to achieve
          relatively good recognition accuracy (> 60%) for most of the selected
          foods on stock images.
        </Typography>
        <SubtitleDivider
          text={"Compound Image Algorithm (Shelf-Detector)"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder4"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          First, we simplified this problem to the stock image above, and
          attempted to create an algorithm that could split the image along it's
          horizontal axis (i.e. the shelves).
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder5"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          Next, we used a 90 degree orientation Gabor image filter to filter the
          image only to its horizontal features.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder6"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          Since we only wanted the shelves, we isolated the most prominent
          horizontal lines from the filtered image.
        </Typography>
        <div className={classes.topBottomImageWrapper}>
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder7"
              ).childImageSharp.fluid
            }
          />
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder8"
              ).childImageSharp.fluid
            }
          />
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder9"
              ).childImageSharp.fluid
            }
          />
          <Img
            className={classes.shelfImage}
            fluid={
              _.find(
                images,
                (d: { name: string }) => d.name === "recipe_builder10"
              ).childImageSharp.fluid
            }
          />
        </div>
        <Typography variant="subtitle1">
          Finally, we cut the original image along those lines, resulting in
          images of each shelf of food. Though we did not implement vertical
          filtering to split the foods, a similar technique could be applied.
        </Typography>
        <SubtitleDivider
          text={"Java Application and Integration with Spoonacular API"}
          otherProps={{ className: classes.divider }}
        />
        <div className={classes.imageWrapper}>
          {isWidthDown("xs", width) ? (
            <>
              <div className={classes.applicationImageSmallWrapper}>
                <Img
                  className={classes.applicationImage}
                  fluid={
                    _.find(
                      images,
                      (d: { name: string }) => d.name === "recipe_builder3"
                    ).childImageSharp.fluid
                  }
                />
              </div>
              <div className={classes.applicationImageSmallWrapper}>
                <Img
                  className={`${classes.applicationImage} ${
                    classes.applicationImage2
                  }`}
                  fluid={
                    _.find(
                      images,
                      (d: { name: string }) => d.name === "recipe_builder3"
                    ).childImageSharp.fluid
                  }
                />
              </div>
            </>
          ) : (
            <Img
              className={classes.applicationImage}
              fluid={
                _.find(
                  images,
                  (d: { name: string }) => d.name === "recipe_builder3"
                ).childImageSharp.fluid
              }
            />
          )}
        </div>
        <Typography variant="subtitle1">
          With the neural-network we trained, we implemented a simple Java GUI
          application that demonstrates the business logic of the mobile app we
          envisioned. Rather than processing a compound image, this
          proof-of-concept requires the user manually select multiple image
          files from their computer. The business logic is as follows...
        </Typography>
        <div className={classes.stepsWrapper}>
          {applicationSteps.map((as, index) => {
            return (
              <div key={as} className={classes.stepWrapper}>
                <Typography className={classes.stepNumber} variant="subtitle1">
                  {index + 1}.
                </Typography>
                <Typography variant="subtitle1">{as}</Typography>
              </div>
            );
          })}
        </div>
      </SampleWorkTemplate>
    );
  }
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "sample_work/recipe-builder" } }
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

export default withWidth()(
  withStyles(styles, { withTheme: true })(RecipeBuilderPage)
);
