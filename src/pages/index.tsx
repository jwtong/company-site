import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
import technologyIcons from "../utils/technologies";
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
import roles from "../utils/roles";
import ServiceCard from "../components/ServiceCard";
import TechnologyCard from "../components/TechnologyCard";

const styles = (theme: any) => ({
  buttonWithMargin: buttonWithMargin(theme),
  technologiesContainer: {
    width: "100%",
    marginTop: theme.spacing(5),
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
    // marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2)
      // marginBottom: theme.spacing(2)
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

const IndexPage = ({ classes, width, data, theme }: Props) => {
  const technologies = [
    {
      icon: { component: technologyIcons.React.icon, color: "#61DAFB" },
      title: "ReactJS",
      type: "Front-End Framework",
      description:
        "ReactJS is one of the most popular front-end frameworks today for building web applications, noted for being fast, scalable, and simple. React Native, it's mobile counterpart, is similarly a robust platform for building cross-platform (iOS/Android) mobile apps.",
      alternatives: "VueJS, Swift (iOS), Java (Android)",
      companiesUsing: [
        <Facebook width="100%" height="60px" />,
        <Netflix width="100%" height="30px" />
      ]
    },
    {
      icon: { component: technologyIcons.Node.icon, color: "#83CD29" },
      title: "NodeJS",
      type: "Back-End Framework",
      description:
        "NodeJS is a widely adopted back-end framework that offers some of the best performance and scalability as compared to similar technologies (e.g. Ruby on Rails), and was designed for comprehensive platform integration and device compatability. ",
      alternatives: "Ruby on Rails, Java, .NET Core",
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
      icon: { component: technologyIcons.Sketch.icon, color: "#fdb300" },
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
      icon: { component: technologyIcons.MySQL.icon, color: "#00618A" },
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
      icon: { component: technologyIcons.AWS.icon, color: "#F7A80D" },
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

  const serviceColors = [
    theme.palette.secondary.light,
    "#ee5d8e",
    "#f281a7",
    "#f4a0bc"
  ];

  return (
    <>
      <SiteHelmet
        description={
          "Web and mobile application development for startups and small businesses."
        }
        title={"Software Development and Consulting"}
      />
      <Hero showAnimation colorBottom={"white"}>
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
        </div>
      </SplashPage>
      <div className={classes.technologiesContainer}>
        <SubtitleDivider
          text="Our Services"
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
            {roles.map((r: any, index: number) => {
              const color = serviceColors[index];
              return (
                <Grid key={index} item xs={12} sm={6} md={3}>
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
                      <ServiceCard role={r} color={color} />
                    </div>
                  </TransitionOnShow>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
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
                      <TechnologyCard technology={t} />
                    </div>
                  </TransitionOnShow>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/about#technology-list"
          variant="contained"
          color="secondary"
          aria-label="Other Technologies"
          state={{ scrollToTechnologies: true }}
        >
          Full Technology List
        </Button>
      </div>
      <PageBottom>
        <Typography variant="h4" style={{ textAlign: "center" }}>
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

export default withWidth()(withStyles(styles, { withTheme: true })(IndexPage));
