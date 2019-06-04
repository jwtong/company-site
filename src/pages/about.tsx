import React from "react";
import { graphql } from "gatsby";
import Resume from "../assets/documents/GS9_Color_Management.pdf";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Divider,
  Chip,
  createStyles,
  withStyles
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import Hero from "../components/hero";
import WaveBottom from "../components/wave_bottom";
import SubtitleDivider from "../components/subtitle_divider";
import PageBottom from "../components/page_bottom";
import technologyColorMap from "../utils/technologies";

// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = createStyles({
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
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const AboutPage = ({ data, classes }: { data: any; classes: any }) => {
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
        "Jeremy Tong is a recent graduate of Brown University who double-majored in Computer Science and Economics with a focus on UI/UX design, Data Analytics, Behaviorial Economics, and Finance.",
        "Most recently, Jeremy worked as a Venture for America fellow for Juggle, a startup that is best described as the Uber-for-Babysitting. There, he assumed the role of interim CTO, handling all aspects of the business related to Juggle's technology and mobile app. In his time there, he rebuilt much of the software platform from scratch that then served over 5000 monthly users and generated $200k in revenue in 2018, an 8x increase over 2017, with a projected increase of 2x in 2019.",
        "Jeremy has had 4+ years of full-stack experience developing web and mobile applications, and is most passionate about intelligent data-driven design. Outside of work, Jeremy loves rock-climbing, playing jazz piano, and hip-hop dance."
      ],
      technologies,
      cv: Resume,
      backgroundColor: "white"
    },
    {
      name: "Thomas Clark",
      avatar: data.jeremyAvatar,
      about: [
        "Jeremy Tong is a recent graduate of Brown University who double-majored in Computer Science and Economics with a focus on UI/UX design, Data Analytics, Behaviorial Economics, and Finance.",
        "Most recently, Jeremy worked as a Venture for America fellow for Juggle, a startup that is best described as the Uber-for-Babysitting. There, he assumed the role of interim CTO, handling all aspects of the business related to Juggle's technology and mobile app. In his time there, he rebuilt much of the software platform from scratch that then served over 5000 monthly users and generated $200k in revenue in 2018, an 8x increase over 2017, with a projected increase of 2x in 2019.",
        "Jeremy has had 4+ years of full-stack experience developing web and mobile applications, and is most passionate about intelligent data-driven design. Outside of work, Jeremy loves rock-climbing, playing jazz piano, and hip-hop dance."
      ],
      technologies,
      cv: Resume,
      backgroundColor: "#fcfcfc"
    }
  ];

  return (
    <>
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
          <Typography component="h2" variant="h4" className={classes.header}>
            Meet the co-founders of _______
          </Typography>
        </div>
      </Hero>
      {people.map((p, index) => {
        return (
          <div key={p.name}>
            <div
              style={{
                padding: "2% 15% 2% 15%",
                alignItems: "stretch",
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
                <Typography
                  style={{ fontFamily: "Lato", fontWeight: 800 }}
                  variant="h4"
                >
                  {p.name}
                </Typography>
                <Img
                  fixed={p.avatar.childImageSharp.fixed}
                  alt={p.name}
                  style={{ borderRadius: "100px", margin: "2% 0% 2% 0%" }}
                />
              </div>
              <SubtitleDivider
                text={"About Me"}
                containerStyle={{ marginBottom: "3%" }}
              />
              {p.about.map((paragraph, index) => {
                return (
                  <Typography variant="subtitle1" style={{ textAlign: "left" }}>
                    {paragraph}
                    {index !== p.about.length - 1 && <br />}
                    {index !== p.about.length - 1 && <br />}
                  </Typography>
                );
              })}
              <SubtitleDivider
                text={"Top Skills"}
                containerStyle={{ marginBottom: "3%", marginTop: "3%" }}
              />
              <Grid
                style={{ paddingRight: "5%", paddingLeft: "5%" }}
                justify="center"
                container
                spacing={1}
              >
                {p.technologies.map(t => {
                  return (
                    <Grid item>
                      <Chip
                        variant="outlined"
                        style={{
                          color: technologyColorMap[t],
                          borderColor: technologyColorMap[t]
                        }}
                        label={t}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Divider style={{ marginTop: "3%", marginBottom: "3%" }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Button href={p.cv} variant="outlined" color="secondary">
                  View CV
                </Button>
              </div>
            </div>
            {index !== people.length - 1 && (
              <WaveBottom
                colorTop={p.backgroundColor}
                colorBottom={people[index + 1].backgroundColor}
              />
            )}
          </div>
        );
      })}
      <PageBottom>
        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Some examples of previous work
          </Typography>
        </div>
        <Button
          style={{
            height: "3rem",
            width: "10rem",
            fontSize: "1rem",
            marginTop: "3%"
          }}
          href="/sample-work"
          variant="contained"
          color="secondary"
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
  }
`;

export default withStyles(styles)(AboutPage);
