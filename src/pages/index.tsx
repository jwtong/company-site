import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
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
});

const IndexPage = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundColor: "red",
          justifyContent: "center"
        }}
      >
        <Typography component="h1" variant="h4" className={classes.header}>
          We want to build your software, the right way
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
          <Typography component="h1" variant="h8" className={classes.header}>
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
        style={{ backgroundColor: "blue", paddingBottom: "5%" }}
      >
        <Typography
          component="h1"
          variant="h4"
          className={classes.header}
          style={{ marginTop: "5%", marginBottom: "5%" }}
        >
          Progressive Web and Mobile Application Development
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            fontSize: "8em",
            width: "80%"
          }}
        >
          <Grid container spacing={24} style={{ backgroundColor: "red" }}>
            <Grid item xs={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  paddingTop: "2rem",
                  paddingBottom: "2rem"
                }}
              >
                <Typography component="h4" variant="h4">
                  Front-End
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                  }}
                >
                  <ReactIcon fontSize="inherit" className={classes.mIcon} />
                  <Vuejs fontSize="inherit" className={classes.mIcon} />
                  <AppleIos fontSize="inherit" className={classes.mIcon} />
                  <Android fontSize="inherit" className={classes.mIcon} />
                </div>
                <List>
                  <ListItem>
                    <ListItemText primary="React / React Native" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Vue.js" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="IOS (Objective-C / Swift)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Android (Java)" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  paddingTop: "2rem",
                  paddingBottom: "2rem"
                }}
              >
                <Typography component="h4" variant="h4">
                  Back-End
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
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
                <List>
                  <ListItem>
                    <ListItemText primary="NodeJs" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Ruby on Rails" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary=".NET (C#)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Google Firebase" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  paddingTop: "2rem",
                  paddingBottom: "2rem"
                }}
              >
                <Typography component="h4" variant="h4">
                  Platform
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap"
                  }}
                >
                  <Database fontSize="inherit" className={classes.mIcon} />
                  <Aws fontSize="inherit" className={classes.mIcon} />
                  <Azure fontSize="inherit" className={classes.mIcon} />
                  <LanguagePython
                    fontSize="inherit"
                    className={classes.mIcon}
                  />
                </div>
                <List>
                  <ListItem>
                    <ListItemText primary="SQL / NoSQL" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="AWS" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Azure" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Python (Machine Learning / Data Analytics)" />
                  </ListItem>
                </List>
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
        <Typography component="h5" variant="h5" className={classes.header}>
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

export default IndexPage;
