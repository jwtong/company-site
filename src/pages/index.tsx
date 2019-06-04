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

const styles = {
  header: {
    color: "white !important",
    textAlign: "center"
  }
};

const IndexPage = props => {
  const { classes, theme } = props;

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant="h1" className={classes.header} gutterBottom>
            Company Name
          </Typography>
          <Typography variant="h4" className={classes.header}>
            We want to build your software, the right way
          </Typography>
        </div>
      </Hero>
      <SplashPage>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          We founded _______ to engage with startups, business ideas, and
          interesting people. As as team of two, our expertise lies in the
          ability to learn and execute quickly, our focus is to deliver the best
          technology, and our advantage is being lean.
        </Typography>
        <Button
          style={{
            height: "3rem",
            width: "10rem",
            fontSize: "1rem",
            marginTop: "3%"
          }}
          href="/contact"
          variant="contained"
          color="secondary"
        >
          Services
        </Button>
      </SplashPage>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <SubtitleDivider
          text="Progressive Web and Mobile Application Development"
          containerStyle={{ width: "90%" }}
        />
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
            width: "90%",
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5)
          }}
        >
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            {technologies.map(({ icons, names, title }, index: number) => {
              return (
                <Grid key={index} item xs={4}>
                  <TransitionOnShow
                    visibilitySensorProps={{ partialVisibility: true }}
                    transitionType="Zoom"
                    delay={index * 200}
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
        <Typography
          component="h4"
          variant="h4"
          className={classes.header}
          gutterBottom
        >
          Contact us to discuss your project and how we can collaborate.
        </Typography>
        <Button
          style={{
            height: "3rem",
            width: "10rem",
            fontSize: "1rem",
            marginTop: "3%"
          }}
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

export default withStyles(styles, { withTheme: true })(IndexPage);
