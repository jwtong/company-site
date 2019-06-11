import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
  Aws,
  Azure,
  LanguagePython
} from "mdi-material-ui";
import { Typography } from "@material-ui/core";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnologiesCard from "../components/technologies_card";
import Hero from "../components/hero";
import SubtitleDivider from "../components/subtitle_divider";
import TransitionOnShow from "../components/transition_on_show";
import PageBottom from "../components/page_bottom";
import SplashPage from "../components/splash_page";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme => ({
  technologiesWrapper: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    "-webkit-box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "box-sizing": "border-box"
  },
  gridWrapper: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  header2: {
    color: "white !important",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5em"
    }
  },
  subHeader2: {
    color: "white !important",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.75em"
    }
  },
  button: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
    }
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

const IndexPage = props => {
  const { classes, theme, width } = props;

  const technologies = [
    {
      title: "Front-end",
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
      title: "Back-end",
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
      title: "Platform / Other",
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
      <Hero colorBottom={"white"}>
        <Typography variant="h1" className={classes.header} gutterBottom>
          Company Name
        </Typography>
        <Typography variant="h4" className={classes.header}>
          We want to build your software, the right way
        </Typography>
      </Hero>
      <SplashPage>
        <div className={classes.bottomWrapper}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            We founded _______ to engage with startups, business ideas, and
            interesting people. As as team of two, our expertise lies in the
            ability to learn and execute quickly, our focus is to deliver the
            best technology, and our advantage is being lean.
          </Typography>
          <Button
            className={classes.button}
            href="/services"
            variant="contained"
            color="secondary"
          >
            Services
          </Button>
        </div>
      </SplashPage>
      <div className={classes.technologiesWrapper}>
        <SubtitleDivider
          text="Progressive Web and Mobile Application Development"
          containerStyle={{
            width: "100%"
          }}
        />
        <div className={classes.gridWrapper}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            {technologies.map(({ icons, names, title }, index: number) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <TransitionOnShow
                    visibilitySensorProps={{ partialVisibility: true }}
                    transitionType="Zoom"
                    delay={isWidthDown("xs", width) ? 0 : index * 200}
                    transitionProps={{ timeout: { enter: 1000 } }}
                  >
                    <div>
                      <TechnologiesCard
                        technology={{
                          icons: icons,
                          names: names,
                          title: title
                        }}
                      />
                    </div>
                  </TransitionOnShow>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <PageBottom>
        <Typography variant="h2" className={classes.header} gutterBottom>
          Interested in working together?
        </Typography>
        <Typography variant="h4" className={classes.header} gutterBottom>
          Contact us to discuss your project and how we can collaborate.
        </Typography>
        <Button
          className={classes.button}
          href="/contact"
          variant="contained"
          color="secondary"
        >
          Contact Us
        </Button>
      </PageBottom>
    </>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(IndexPage));
