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

class RecipeBuilderPage extends React.Component {
  public constructor(props) {
    super(props);
    this.state = {
      element1: false
    };
  }

  private onChange = elementId => isVisible => {
    ;
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
              Computer Vision Recipe Builder
            </Typography>
            <Typography variant="h5" className={classes.header} gutterBottom>
              A computer vision app that allows you to take pictures of your
              pantry, recognizes what food you have, and tells you what recipes
              you can cook right away
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
            Technologies
          </Typography>
          <Grid justify="center" container spacing={1}>
            <Grid item>
              <Chip label="Java" />
            </Grid>
            <Grid item>
              <Chip label="MATLAB" />
            </Grid>
          </Grid>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Overview
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            This project was split into three distinct parts, together
            demonstrating proof-of-concept functionality for a possible mobile
            app. The first part consists of training a neural-network to
            recognize discrete food items. The second part consists of
            developing an image recognition algorithm to split a compound image
            of food items into discrete food items. The third part consists of
            combining the neural-network with the Spoonacular API as a Java
            application to demo recipe synthesis.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Training the Neural-Network on Food
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.recipeBuilder2.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            We retrained the existing SVM AlexNet to handle food recognition,
            specifically from hundreds of stock food images, although we decided
            to select only a set of 23 common foods which this SVM could
            recognize (rather than having it recognize many foods, which could
            require millions of images). As shown above, we were able to achieve
            relatively good recognition accuracy (> 60%) for most of the
            selected foods on stock images.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Compound Image Algorithm (Shelf-Detector)
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
            <Img fixed={data.recipeBuilder4.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            First, we simplified this problem to the stock image above, and
            attempted to create an algorithm that could split the image along
            it's horizontal axis (i.e. the shelves).
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
            <Img fixed={data.recipeBuilder5.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Next, we used a 90 degree orientation Gabor image filter to filter
            the image only to its horizontal features.
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
            <Img fixed={data.recipeBuilder6.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Since we only wanted the shelves, we isolated the most prominent
            horizontal lines from the filtered image.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "3%",
              marginBottom: "3%"
            }}
          >
            <Img fixed={data.recipeBuilder7.childImageSharp.fixed} />
            <Img fixed={data.recipeBuilder8.childImageSharp.fixed} />
            <Img fixed={data.recipeBuilder9.childImageSharp.fixed} />
            <Img fixed={data.recipeBuilder10.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            Finally, we cut the original image along those lines, resulting in
            images of each shelf of food. Though we did not implement vertical
            filtering to split the foods, a similar technique could be applied.
          </Typography>
          <Divider
            variant="middle"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          />
          <Typography variant="h4" style={{ textAlign: "center" }} gutterBottom>
            Java Application and Integration with Spoonacular API
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
            <Img fixed={data.recipeBuilder3.childImageSharp.fixed} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>
            With the neural-network we trained, we implemented a simple Java GUI
            application that demonstrates the business logic of the mobile app
            we envisioned. Rather than processing a compound image, this
            proof-of-concept requires the user manually select multiple image
            files from their computer. The business logic is as follows...
          </Typography>
          <List>
            <ListItem
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <ListItemText
                primaryTypographyProps={{
                  variant: "subtitle1"
                }}
                primary="1. Select images"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "subtitle1" }}
                primary="2. Connect to Matlab through Java"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "subtitle1" }}
                primary="3. Classify images in Matlab and return results to GUI"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "subtitle1" }}
                primary="4. Call “What’s in the Fridge” API on results"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "subtitle1" }}
                primary="5. Display Recipes"
              />
            </ListItem>
          </List>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    recipeBuilder1: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder1.png" }
    ) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder2: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder2.png" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder3: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder3.png" }
    ) {
      childImageSharp {
        fixed(width: 1000) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder4: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder4.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder5: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder5.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder6: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder6.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder7: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder7.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder8: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder8.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder9: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder9.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recipeBuilder10: file(
      relativePath: { eq: "sample_work/recipe-builder/recipe_builder10.png" }
    ) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default withStyles(styles, { withTheme: true })(RecipeBuilderPage);
