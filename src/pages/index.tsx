import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import {
  React as ReactIcon,
  Vuejs,
  AppleIos,
  Android,
  Nodejs,
  LanguageRubyOnRails,
  DotNet,
  Firebase,
  Database,
  Aws,
  Azure,
  LanguagePython
} from "mdi-material-ui";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  mIcon: {
    color: "white"
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
    justifyContent: "center",
    alignItems: "center"
  }
};

const IndexPage = props => {
  const { classes, theme } = props;
  const frontEnd = [
    { text: "React / React Native", starred: true },
    { text: "Vue.js", starred: false },
    { text: "iOS (Objective-C / Swift)", starred: false },
    { text: "Android (Java)", starred: false }
  ];
  const backEnd = [
    { text: "NodeJS", starred: true },
    { text: "Ruby on Rails", starred: false },
    { text: "Microsoft .NET (C#)", starred: false },
    { text: "Google Firebase", starred: false }
  ];
  const platformOther = [
    { text: "AWS", starred: false },
    { text: "Microsoft Azure", starred: false },
    { text: "Python (Data Analytics)", starred: false },
    { text: "Sketch (UI/UX)", starred: false }
  ];
  console.log(theme.spacing.unit);
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundColor: "red",
          justifyContent: "center"
        }}
      >
        <Typography variant="h4" className={classes.header}>
          We want to build your software, the right way Roboto
        </Typography>
      </div>
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
          <Typography variant="h4" className={classes.header}>
            We founded _______ to engage with startups, business ideas, and
            interesting people. As as team of two, our expertise lies in the
            ability to learn and execute quickly, our focus is to deliver the
            best technology, and our advantage is being lean.
          </Typography>
          <Button href="/contact" variant="outlined" color="secondary">
            Services
          </Button>
        </div>
      </div>

      <div
        className={classes.container}
        style={{
          backgroundColor: "#e2e2e2",
          fontSize: "6em"
        }}
      >
        <Typography variant="h4" gutterBottom>
          Progressive Web and Mobile Application Development
        </Typography>
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            marginTop: theme.spacing.unit * 5,
            marginLeft: theme.spacing.unit * 10,
            marginRight: theme.spacing.unit * 10
          }}
        >
          <Grid
            container
            spacing={40}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs={4}>
              <Card>
                <CardMedia>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      backgroundColor: "black",
                      paddingTop: theme.spacing.unit * 2,
                      paddingBottom: theme.spacing.unit * 2,
                      paddingLeft: theme.spacing.unit * 1,
                      paddingRight: theme.spacing.unit * 1
                    }}
                  >
                    <ReactIcon fontSize="inherit" className={classes.mIcon} />
                    <Vuejs fontSize="inherit" className={classes.mIcon} />
                    <AppleIos fontSize="inherit" className={classes.mIcon} />
                    <Android fontSize="inherit" className={classes.mIcon} />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography variant="h4">Front-End</Typography>
                  <List>
                    {frontEnd.map(poText => {
                      return (
                        <ListItem key={poText.text}>
                          {poText.starred && <StarIcon />}
                          <ListItemText
                            primaryTypographyProps={{ variant: "h6" }}
                            primary={poText.text}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      backgroundColor: "black",
                      paddingTop: theme.spacing.unit * 2,
                      paddingBottom: theme.spacing.unit * 2,
                      paddingLeft: theme.spacing.unit * 1,
                      paddingRight: theme.spacing.unit * 1
                    }}
                  >
                    <Nodejs fontSize="inherit" className={classes.mIcon} />
                    <LanguageRubyOnRails
                      fontSize="inherit"
                      className={classes.mIcon}
                    />
                    <DotNet fontSize="inherit" className={classes.mIcon} />
                    <Firebase fontSize="inherit" className={classes.mIcon} />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography variant="h4">Back-End</Typography>
                  <List>
                    {backEnd.map(poText => {
                      return (
                        <ListItem key={poText.text}>
                          {poText.starred && <StarIcon />}
                          <ListItemText
                            primaryTypographyProps={{ variant: "h6" }}
                            primary={poText.text}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      backgroundColor: "black",
                      paddingTop: theme.spacing.unit * 2,
                      paddingBottom: theme.spacing.unit * 2,
                      paddingLeft: theme.spacing.unit * 1,
                      paddingRight: theme.spacing.unit * 1
                    }}
                  >
                    <Aws fontSize="inherit" className={classes.mIcon} />
                    <Azure fontSize="inherit" className={classes.mIcon} />
                    <LanguagePython
                      fontSize="inherit"
                      className={classes.mIcon}
                    />
                    <FontAwesomeIcon
                      icon={faSketch}
                      className={classes.mIcon}
                    />
                  </div>
                </CardMedia>
                <CardContent>
                  <Typography variant="h4">Platform / Other</Typography>
                  <List>
                    {platformOther.map(poText => {
                      return (
                        <ListItem key={poText.text}>
                          {poText.starred && <StarIcon />}
                          <ListItemText
                            primaryTypographyProps={{ variant: "h6" }}
                            primary={poText.text}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      <div
        className={classes.container}
        style={{
          backgroundColor: "green",
          justifyContent: "center"
        }}
      >
        <Typography component="h1" variant="h4" className={classes.header}>
          Interested in working together?
        </Typography>
        <Typography component="h4" variant="h4" className={classes.header}>
          — Contact us to discuss your project and how we can collaborate.
        </Typography>
        <Button href="/contact" variant="outlined" color="secondary">
          Contact Us
        </Button>
      </div>
    </>
  );
};

// <FontAwesomeIcon
//   className={classes.faIcon}
//   icon={faReact}
//   color="white"
// />
// <FontAwesomeIcon icon={faNode} color="white" />
// <ReactIcon className={classes.devicon} height="90px" width="90px" />
// <NodeIcon className={classes.devicon} height="90px" width="90px" />
// <AwsIcon className={classes.devicon} height="90px" width="90px" />
// <RailsIcon className={classes.devicon} height="90px" width="90px" />

export default withStyles(styles, { withTheme: true })(IndexPage);
