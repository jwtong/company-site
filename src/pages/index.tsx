import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
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
  CardMedia,
  ListItemIcon
} from "@material-ui/core";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnologiesCard from "../components/technologies_card";

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

  const technologies = [
    {
      icons: [
        { component: ReactIcon },
        { component: Vuejs },
        { component: AppleIos },
        { component: Android }
      ],
      names: [
        { text: "React / React Native", starred: true },
        { text: "Vue.js", starred: false },
        { text: "iOS (Objective-C / Swift)", starred: false },
        { text: "Android (Java)", starred: false }
      ]
    },
    {
      icons: [
        { component: Nodejs },
        { component: LanguageRubyOnRails },
        { component: DotNet },
        { component: Firebase }
      ],
      names: [
        { text: "NodeJS", starred: true },
        { text: "Ruby on Rails", starred: false },
        { text: "Microsoft .NET (C#)", starred: false },
        { text: "Google Firebase", starred: false }
      ]
    },
    {
      icons: [
        { component: Aws },
        { component: Azure },
        { component: LanguagePython },
        { component: FontAwesomeIcon, additionalProps: { icon: faSketch } }
      ],
      names: [
        { text: "AWS", starred: false },
        { text: "Microsoft Azure", starred: false },
        { text: "Python (Data Analytics)", starred: false },
        { text: "Sketch (UI/UX)", starred: false }
      ]
    }
  ];

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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: theme.spacing(5)
        }}
      >
        <Typography variant="h4" gutterBottom>
          Progressive Web and Mobile Application Development
        </Typography>
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            marginTop: theme.spacing(5),
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10)
          }}
        >
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            {technologies.map(({ icons, names }, index: number) => {
              return (
                <Grid key={index} item xs={4}>
                  <TechnologiesCard
                    technology={{ icons: icons, names: names }}
                  />
                </Grid>
              );
            })}
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

export default withStyles(styles, { withTheme: true })(IndexPage);
