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
import TechnologiesCard from "../components/TechnologiesCard";
import Hero from "../components/Hero";
import SubtitleDivider from "../components/SubtitleDivider";
import TransitionOnShow from "../components/TransitionOnShow";
import PageBottom from "../components/PageBottom";
import SplashPage from "../components/SplashPage";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { buttonWithMargin } from "../components/SharedStyles";
import { graphql } from "gatsby";

const styles = (theme: any) => ({
  buttonWithMargin: buttonWithMargin(theme),
  technologiesContainer: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4)
    },
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
  grid: {
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
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  transition: {
    height: "100%"
  }
});

const IndexPage = props => {
  const { classes, theme, width, data } = props;

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
          {data.site.siteMetadata.companyName}
        </Typography>
        <Typography variant="h4" className={classes.header}>
          We want to build your software, the right way
        </Typography>
      </Hero>
      <SplashPage>
        <div className={classes.bottomContainer}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            We founded {data.site.siteMetadata.companyName} to engage with
            startups, business ideas, and interesting people. As as team of two,
            our expertise lies in the ability to learn and execute quickly, our
            focus is to deliver the best technology, and our advantage is being
            lean.
          </Typography>
          <Button
            className={classes.buttonWithMargin}
            href="/services"
            variant="contained"
            color="secondary"
          >
            Services
          </Button>
        </div>
      </SplashPage>
      <div className={classes.technologiesContainer}>
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
                <Grid key={index} item xs={12} sm={12} md={4}>
                  <TransitionOnShow
                    visibilitySensorProps={{ partialVisibility: true }}
                    transitionType="Zoom"
                    delay={isWidthDown("sm", width) ? 0 : index * 200}
                    transitionProps={{
                      timeout: { enter: 1000 },
                      className: classes.transition
                    }}
                    containerStyle={{
                      height: "100%"
                    }}
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
          className={classes.buttonWithMargin}
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

export const query = graphql`
  query {
    site {
      siteMetadata {
        companyName
      }
    }
  }
`;

export default withWidth()(withStyles(styles, { withTheme: true })(IndexPage));
