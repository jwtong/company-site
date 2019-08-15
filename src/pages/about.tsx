import React from "react";
import { graphql, Link } from "gatsby";
import JeremyTongResume from "../assets/documents/JeremyTongResume.pdf";
import ThomasClarkResume from "../assets/documents/ThomasClarkResume.pdf";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Divider,
  Chip,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import Hero from "../components/Hero";
import SubtitleDivider from "../components/SubtitleDivider";
import PageBottom from "../components/PageBottom";
import technologyColorMap from "../utils/technologies";
import {
  buttonWithMargin,
  dividerWithMargin
} from "../components/SharedStyles";
import SiteHelmet from "../components/SiteHelmet";

const styles = (theme: any) =>
  createStyles({
    header: {
      color: "white !important",
      textAlign: "center"
    },
    buttonWithMargin: buttonWithMargin(theme),
    dividerWithMargin: dividerWithMargin(theme),
    aboutContainer: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      },
      alignItems: "stretch"
    },
    avatar: {
      borderRadius: "100px",
      marginTop: theme.spacing(4)
    },
    skillsGrid: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0)
      }
    },
    name: {
      fontFamily: "Open Sans",
      fontWeight: 800,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.75rem"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
}

const AboutPage = ({ data, classes }: Props) => {
  const technologies: Array<any> = [
    "React / React Native",
    "C / C++",
    "Python (SciKit-Learn)",
    "Google Firebase",
    "AWS",
    "Sketch",
    "Objective-C / Swift",
    "Java",
    "Ruby on Rails",
    "SQL",
    "NoSQL"
  ];

  const people = [
    {
      name: "Jeremy Tong",
      avatar: data.jeremyAvatar,
      about: [
        "Jeremy Tong is a graduate of Brown University with dual majors in Computer Science and Economics. His studies focused on UI/UX design, data analytics, behaviorial economics, and finance.",
        "Most recently, Jeremy worked as a Venture for America fellow for Juggle, a startup best described as 'Uber for Babysitting'. He assumed the role of interim CTO, handling all aspects of business related to Juggle's technology and mobile app. During his tenure with Juggle, Jeremy rebuilt the software platform from scratch. The platform serves over 5000 monthly users and generated $200k in revenue in 2018, an 8x increase over 2017, with a projected increase of 2x in 2019.",
        "Through his 4+ years of full-stack experience with web and mobile applications, Jeremy developed a passion for intelligent, data-driven design. Outside of work, Jeremy loves rock climbing, playing jazz piano, and hip-hop dance."
      ],
      backgroundColor: "#f9f9f9"
    },
    {
      name: "Tommy Clark",
      avatar: data.jeremyAvatar,
      about: [
        ""
      ],
      backgroundColor: "white"
    }
  ];

  return (
    <>
      <SiteHelmet
        description={`About ${data.site.siteMetadata.companyName}`}
        title={"About"}
      />
      <Hero colorBottom={"white"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center"
          }}
        >
          <Typography variant="h1" className={classes.header} gutterBottom>
            About Us
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Meet the two founder / software developers of{" "}
            {data.site.siteMetadata.companyName}
          </Typography>
        </div>
      </Hero>
      {people.map((p, index) => {
        return (
          <div key={p.name}>
            <div
              className={classes.aboutContainer}
              style={{
                backgroundColor: p.backgroundColor
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Typography className={classes.name} variant="h4">
                  {p.name}
                </Typography>
                <Img
                  fixed={p.avatar.childImageSharp.fixed}
                  alt={p.name}
                  className={classes.avatar}
                />
              </div>
              <SubtitleDivider
                text={"About Me"}
                otherProps={{ className: classes.dividerWithMargin }}
              />
              {p.about.map((paragraph, index) => {
                return (
                  <Typography
                    key={index}
                    variant="subtitle1"
                    style={{ textAlign: "left" }}
                  >
                    {paragraph}
                    {index !== p.about.length - 1 && <br />}
                    {index !== p.about.length - 1 && <br />}
                  </Typography>
                );
              })}
            </div>
          </div>
        );
      })}
      <PageBottom colorTop={people[1].backgroundColor}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Some examples of previous work
        </Typography>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/sample-work"
          variant="contained"
          color="secondary"
          aria-label="Sample Work"
        >
          Sample Work
        </Button>
      </PageBottom>
    </>
  );
};

export const query = graphql`
  query {
    jeremyAvatar: file(relativePath: { eq: "images/jeremy_profile.jpeg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        companyName
      }
    }
  }
`;

export default withStyles(styles)(AboutPage);
