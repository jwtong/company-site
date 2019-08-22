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
  WithStyles,
  IconButton
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import Hero from "../components/Hero";
import SubtitleDivider from "../components/SubtitleDivider";
import PageBottom from "../components/PageBottom";
import {
  buttonWithMargin,
  dividerWithMargin
} from "../components/SharedStyles";
import SiteHelmet from "../components/SiteHelmet";
import technologyIcons from "../utils/technologies";
import StandardPopover from "../components/StandardPopover";
import HoverIconButton from "../components/HoverIconButton";

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
    technologyList: {
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
      paddingBottom: theme.spacing(6),
      paddingTop: "70px",
      marginTop: "-70px",
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10)
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    },
    name: {
      fontFamily: "Open Sans",
      fontWeight: 800,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.75rem"
      }
    },
    hoverIconButtonWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
}

const AboutPage = ({ data, classes }: Props) => {
  const people = [
    {
      name: "Jeremy Tong",
      avatar: data.jeremyAvatar,
      about: [
        "Jeremy Tong is a graduate of Brown University with dual majors in Computer Science and Economics. His studies focused on UI/UX design, data analytics, behaviorial economics, and finance.",
        "Most recently, Jeremy worked as a Venture for America fellow for Juggle, a startup best described as 'Uber for Babysitting'. He assumed the role of interim CTO, handling all aspects of business related to Juggle's technology and mobile app. During his tenure with Juggle, Jeremy rebuilt the software platform from scratch. The platform serves over 5000 monthly users and generated $200k in revenue in 2018, an 8x increase over 2017, with a projected increase of 2x in 2019.",
        "Through his 4+ years of full-stack experience with web and mobile applications, Jeremy developed a passion for intelligent, data-driven design. Outside of work, Jeremy loves rock climbing, playing jazz piano, and hip-hop dance."
      ],
      backgroundColor: "white"
    },
    {
      name: "Tommy Clark",
      avatar: data.jeremyAvatar,
      about: [""],
      backgroundColor: "#f9f9f9"
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
      <div id="technology-list" className={classes.technologyList}>
        <SubtitleDivider
          text={"Knit's Technologies"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Grid container spacing={3} direction="row" justify="center">
          {Object.entries(technologyIcons)
            .filter((entry: any) => !entry[1].excludeInList)
            .map((entry: any) => {
              const name = entry[0];
              const value = entry[1];
              return (
                <Grid item xs={1} className={classes.hoverIconButtonWrapper}>
                  <HoverIconButton
                    popoverText={name}
                    link={value.link}
                    icon={value.icon}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
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
