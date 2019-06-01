import React from "react";
import { Link, graphql } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Resume from "../assets/documents/GS9_Color_Management.pdf";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
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
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import hexToRgba from "../utils/hex_rgba";
import Hero from "../components/hero";

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

const AboutPage = ({ data }: { data: any }) => {
  const classes = useStyles();
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
      <div
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          padding: "0% 15% 0% 15%",
          alignItems: "stretch"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Typography variant="h4">Jeremy Tong</Typography>
          <Img
            fixed={data.jeremyAvatar.childImageSharp.fixed}
            alt="Jeremy Tong"
            style={{ borderRadius: "100px", margin: "2% 0% 2% 0%" }}
          />
        </div>

        <Divider variant="middle" style={{ marginBottom: "2%" }} />
        <Typography variant="h6" style={{ textAlign: "center" }} gutterBottom>
          About me
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Jeremy Tong is a recent graduate of Brown University who
          double-majored in Computer Science and Economics with a focus on UI/UX
          design, Data Analytics, Behaviorial Economics, and Finance.
          <br />
          <br /> Most recently, Jeremy worked as a Venture for America fellow
          for Juggle, a startup that is best described as the
          Uber-for-Babysitting. There, he assumed the role of interim CTO,
          handling all aspects of the business related to Juggle's technology
          and mobile app. In his time there, he rebuilt much of the software
          platform from scratch that then served over 5000 monthly users and
          generated $200k in revenue in 2018, an 8x increase over 2017, with a
          projected increase of 2x in 2019.
          <br />
          <br /> Jeremy has had 4+ years of full-stack experience developing web
          and mobile applications, and is most passionate about intelligent
          data-driven design. Outside of work, Jeremy loves rock-climbing,
          playing jazz piano, and hip-hop dance.
        </Typography>
        <Divider
          variant="middle"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        />
        <Typography variant="h6" style={{ textAlign: "center" }} gutterBottom>
          Top Skills
        </Typography>
        <Grid
          style={{ paddingRight: "5%", paddingLeft: "5%" }}
          justify="center"
          container
          spacing={1}
        >
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#05a5d1", borderColor: "#05a5d1" }}
              label="React / React Native"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#649CD3", borderColor: "#649CD3" }}
              label="C / C++"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#1F415F", borderColor: "#1F415F" }}
              label="Python (SciKit-Learn)"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#FFCB2B", borderColor: "#FFCB2B" }}
              label="Google Firebase"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#FF9A02", borderColor: "#FF9A02" }}
              label="AWS"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#fa6400", borderColor: "#fa6400" }}
              label="Sketch"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#ED523F", borderColor: "#ED523F" }}
              label="Objective-C / Swift"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#EC2025", borderColor: "#EC2025" }}
              label="Java"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#cc0000", borderColor: "#cc0000" }}
              label="Ruby on Rails"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#0078D6", borderColor: "#0078D6" }}
              label="SQL"
            />
          </Grid>
          <Grid item>
            <Chip
              variant="outlined"
              style={{ color: "#439B44", borderColor: "#439B44" }}
              label="NoSQL"
            />
          </Grid>
        </Grid>
        <Divider
          variant="middle"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Button href={Resume} variant="outlined" color="primary">
            View CV
          </Button>
        </div>
      </div>
      <div
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          padding: "0% 15% 0% 15%"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Typography variant="h4">Thomas Clark</Typography>
          <Img
            fixed={data.jeremyAvatar.childImageSharp.fixed}
            alt="Thomas Clark"
            style={{ borderRadius: "100px", margin: "2% 0% 2% 0%" }}
          />
        </div>

        <Divider variant="middle" style={{ marginBottom: "2%" }} />
        <Typography variant="h6" style={{ textAlign: "center" }} gutterBottom>
          About me
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Thomas Clark is a grade-1 asshole.
        </Typography>
        <Divider
          variant="middle"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        />
        <Typography variant="h6" style={{ textAlign: "center" }} gutterBottom>
          Another Block
        </Typography>
        <Typography variant="subtitle1" style={{ textAlign: "left" }}>
          Lorem Ipsum
        </Typography>
        <Divider
          variant="middle"
          style={{ marginTop: "2%", marginBottom: "2%" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Button href={Resume} variant="outlined" color="primary">
            View CV
          </Button>
        </div>
      </div>
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

export default AboutPage;
