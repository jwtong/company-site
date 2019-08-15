import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import {
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
import Code from "@material-ui/icons/Code";
import {
  Typography,
  WithStyles,
  Card,
  CardContent,
  Divider
} from "@material-ui/core";
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
import { graphql, Link } from "gatsby";
import SiteHelmet from "../components/SiteHelmet";
import technologyColorMap from "../utils/technologies";
import ReactIcon from "../assets/devicon-master/icons/react/react-original.svg";
import NodeIcon from "../assets/devicon-master/icons/nodejs/nodejs-original.svg";
import SketchIcon from "../assets/devicon-master/icons/sketch/sketch-original.svg";
import AwsIcon from "../assets/devicon-master/icons/amazonwebservices/amazonwebservices-original.svg";
import MySQLIcon from "../assets/devicon-master/icons/mysql/mysql-original.svg";
import Facebook from "../assets/svg/Facebook.svg";
import Netflix from "../assets/svg/Netflix.svg";
import PayPal from "../assets/svg/PayPal.svg";
import Uber from "../assets/svg/Uber.svg";
import Google from "../assets/svg/Google.svg";
import Etsy from "../assets/svg/Etsy.svg";
import Twitch from "../assets/svg/Twitch.svg";
import LinkedIn from "../assets/svg/LinkedIn.svg";
import Wikipedia from "../assets/svg/Wikipedia.svg";
import YouTube from "../assets/svg/YouTube.svg";

const styles = (theme: any) => ({
  buttonWithMargin: buttonWithMargin(theme),
  technologiesContainer: {
    width: "100%",
    marginBottom: theme.spacing(5),
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
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  transition: {
    height: "100%"
  },
  companySvg: {
    "& path": {
      fill: "gray"
    }
  }
});

interface Props extends WithStyles<typeof styles> {
  data: any;
  width: any;
}

const IndexPage = ({ classes, width, data }: Props) => {
  const technologies = [
    {
      icon: { component: ReactIcon, color: "#61DAFB" },
      title: "ReactJS",
      type: "Front-End Framework",
      description:
        "ReactJS is one of the most popular front-end frameworks today for building web applications, noted for being fast, scalable, and simple. React Native, it's mobile counterpart, is similarly a robust platform for building cross-platform (iOS/Android) mobile apps.",
      alternatives: "VueJS, iOS Swift, Android Java",
      companiesUsing: [
        <Facebook width="100%" height="60px" />,
        <Netflix width="100%" height="30px" />
      ]
    },
    {
      icon: { component: SketchIcon, color: "#fdb300" },
      title: "Sketch",
      type: "Wireframing",
      description:
        "Sketch is a powerful visual editing tool used to create mockups for mobile and web applications. Unlike the more traditional Photoshop, Sketch is well known for is simplicity and compatability with software engineering paradigms.",
      alternatives: "Balsamiq, InVision",
      companiesUsing: [
        <Google
          width="100%"
          height="40px"
          style={{ marginTop: ".75rem", marginBottom: ".75rem" }}
        />,
        <Etsy width="100%" height="40px" />
      ]
    },
    {
      icon: { component: NodeIcon, color: "#83CD29" },
      title: "NodeJS",
      type: "Back-End Framework",
      description:
        "NodeJS is a widely adopted back-end framework that offers some of the best performance and scalability as compared to similar technologies (e.g. Ruby on Rails), and was designed for comprehensive platform integration and device compatability. ",
      alternatives: "Ruby on Rails, Java, C#",
      companiesUsing: [
        <Uber
          width="100%"
          height="30px"
          style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
        />,
        <PayPal width="100%" height="30px" />
      ]
    },
    {
      icon: { component: MySQLIcon, color: "#00618A" },
      title: "MySQL",
      type: "Database Language",
      description:
        "MySQL based on SQL language holds the largest market share for relational database management systems. It is a stable, reliable, and powerful solution that offers advanced features.",
      alternatives: "PostgreSQL, MongoDB",
      companiesUsing: [
        <Wikipedia
          width="100%"
          height="30px"
          style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
        />,
        <YouTube width="100%" height="30px" />
      ]
    },
    {
      icon: { component: AwsIcon, color: "#F7A80D" },
      title: "Amazon Web Services",
      type: "Hosting Platform",
      description:
        "Of the many hosting platforms available today, Amazon Web Services is the most widely used, and is well tuned to manage any size of application from a school-project to a billion dollar company.",
      alternatives: "Microsoft Azure, Google Firebase",
      companiesUsing: [
        <Twitch
          width="100%"
          height="30px"
          style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }}
        />,
        <LinkedIn width="100%" height="30px" />
      ]
    }
  ];

  return (
    <>
      <SiteHelmet
        description={
          "Web and mobile application development for startups and small businesses."
        }
        title={"Software Development and Consulting"}
      />
      <Hero colorBottom={"white"}>
        <Typography variant="h1" className={classes.header} gutterBottom>
          {data.site.siteMetadata.companyName}
        </Typography>
        <Typography variant="h4" className={classes.header}>
          code as craft
        </Typography>
      </Hero>
      <SplashPage>
        <div className={classes.bottomContainer}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {data.site.siteMetadata.companyName} is a software development
            consultancy aimed to provide small businesses and startups with high
            quality code through friendly, approachable means.
          </Typography>
          <Button
            className={classes.buttonWithMargin}
            component={Link}
            to="/services"
            variant="contained"
            color="secondary"
            aria-label="Services"
          >
            Services
          </Button>
        </div>
      </SplashPage>
      <div className={classes.technologiesContainer}>
        <SubtitleDivider
          text="Our Recommended Tech Stack"
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
            {technologies.map((t: any, index: number) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <TransitionOnShow
                    visibilitySensorProps={{ partialVisibility: true }}
                    transitionType="Zoom"
                    delay={isWidthDown("sm", width) ? 0 : (index % 3) * 200}
                    transitionProps={{
                      timeout: { enter: 1000 },
                      className: classes.transition
                    }}
                    containerStyle={{
                      height: "100%"
                    }}
                  >
                    <div>
                      <Card style={{ height: "100%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%"
                          }}
                        >
                          <div>
                            <div
                              style={{
                                padding: "1rem",
                                // height: "4rem",
                                backgroundColor: t.icon.color,
                                display: "flex",
                                justifyContent: "center"
                                // border: `10px solid ${i.color}`
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: "100rem",
                                  height: "4rem",
                                  width: "4rem",
                                  padding: "1rem",
                                  // margin: "1%",
                                  backgroundColor: "white"

                                  // border: `10px solid ${i.color}`
                                }}
                              >
                                {React.createElement(t.icon.component)}
                              </div>
                            </div>
                            <CardContent>
                              <Typography
                                style={{
                                  textAlign: "center",
                                  fontSize: "2rem"
                                }}
                                // gutterBottom
                              >
                                {t.title}
                              </Typography>
                              <Typography
                                color="secondary"
                                style={{
                                  fontSize: "1rem",
                                  textAlign: "center",
                                  textTransform: "uppercase"
                                }}
                                gutterBottom
                              >
                                {t.type}
                              </Typography>
                              <div
                                style={{
                                  marginRight: ".5rem",
                                  marginLeft: ".5rem"
                                }}
                              >
                                <div
                                  style={{
                                    marginTop: "1rem",
                                    marginBottom: "1rem"
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    Why we like it:
                                  </Typography>
                                  <Typography
                                    variant="subtitle1"
                                    style={{
                                      fontSize: "1rem"
                                    }}
                                  >
                                    {t.description}
                                  </Typography>
                                </div>
                                <div
                                  style={{
                                    marginTop: "2rem",
                                    backgroundColor: "#f9f9f9",
                                    padding: ".75rem",
                                    paddingTop: "1.5rem",
                                    position: "relative"
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "bold",
                                      textAlign: "center",
                                      textTransform: "uppercase"
                                    }}
                                  >
                                    Suggested Alternatives
                                  </Typography>
                                  <div
                                    style={{
                                      position: "absolute",
                                      display: "flex",
                                      top: -15,
                                      left: 0,
                                      right: 0,
                                      justifyContent: "center",
                                      alignItems: "center"
                                    }}
                                  >
                                    <div
                                      style={{
                                        backgroundColor: "#e4e4e4",
                                        borderRadius: "100px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "5px"
                                      }}
                                    >
                                      <Code />
                                    </div>
                                  </div>
                                  <Typography
                                    variant="subtitle1"
                                    style={{
                                      fontSize: "1rem",
                                      textAlign: "center"
                                    }}
                                  >
                                    {t.alternatives}
                                  </Typography>
                                </div>
                                <Divider
                                  style={{
                                    marginTop: "1.5rem",
                                    marginBottom: "1.5rem"
                                  }}
                                />
                                <div style={{ marginBottom: "1.5rem" }}>
                                  <Typography
                                    variant="subtitle1"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "bold",
                                      textAlign: "center",
                                      textTransform: "uppercase"
                                    }}
                                  >
                                    Companies Using {t.title}
                                  </Typography>
                                  {t.companiesUsing.map((cu: any) => {
                                    return React.cloneElement(cu, {
                                      className: classes.companySvg
                                    });
                                  })}
                                </div>
                              </div>
                            </CardContent>
                          </div>
                          <div
                            style={{
                              height: "1rem",

                              backgroundColor: t.icon.color
                            }}
                          />
                        </div>
                      </Card>
                    </div>
                  </TransitionOnShow>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <PageBottom>
        <Typography variant="h4">
          Contact us to discuss your project and how we can collaborate.
        </Typography>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/contact"
          variant="contained"
          color="secondary"
          aria-label="Contact Us"
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

export default withWidth()(withStyles(styles)(IndexPage));
