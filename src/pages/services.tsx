import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import Grid from "@material-ui/core/Grid";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "../components/service_card";
import Hero from "../components/hero";
import WaveBottom from "../components/wave_bottom";

const styles = theme => ({
  // mIcon: {
  //   color: "red"
  // },
  header: {
    color: "white !important",
    textAlign: "center",
    width: "80%"
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
  },
  card: {
    marginTop: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "15%",
    backgroundColor: "#f6f6f6",
    borderTop: `6px solid ${theme.palette.primary.main}`
  }
});

const ServicesPage = props => {
  const { classes } = props;
  const roles = [
    {
      title: "Software Developer",
      text:
        "Specializing in progressive web and mobile applications, our responsibility under this role is to write code in accordance to the project specifications, then configure the hosting platform to serve the website or application live. This role may also include a discussion and recommendation of the right front-end/back-end languages and hosting platform to use.",
      icon: Code
    },
    {
      title: "UI/UX Designer",
      text:
        "If you're not sure how you want your application to look and how you want people to interact with it, we can help apply user-interface best practices and sketch out a visual representation of the application. Note, this does not include branding design such as logos or visual content that may be served up by your application.",
      icon: PaletteOutlined
    },
    {
      title: "Product Manager",
      text:
        "If you have limited knowledge about software, we can take a greater function in making architectural and design choices as related to the code. This primarily means spec'ing features, i.e. translating broader business logic into implementable, scoped tasks. Additionally, we are happy to provide much more feedback and advice in more of a consultant role.",
      icon: AssignmentOutlined
    },
    {
      title: "Business Logic Analyst",
      text:
        "If you just have an idea, we can help you all the way from the bottom-up, suggesting business logic decisions that may pair well with a software implementation. Our focus in this role would be to think critically of the economic and social impacts of the core idea.",
      icon: BusinessCenterOutlined
    },
    {
      title: "Data Analyst",
      text:
        "Parallel to the software development, we can apply data analytic and machine learning principles to provide valuable insights into the efficacy of your application as it relates to your economic or social imperatives.",
      icon: InsertChartOutlined
    }
  ];
  return (
    <>
      <Hero colorBottom="white">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "10%",
            paddingLeft: "10%",
            alignItems: "center"
          }}
        >
          <Typography variant="h1" className={classes.header} gutterBottom>
            Services
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Our core product is code, but we never expect you to come to us with
            a complete blueprint of your idea. We offer any combination of the
            following roles to ensure that we can help you along at any stage.
          </Typography>
        </div>
      </Hero>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        alignContent="center"
        style={{
          fontSize: "10em",
          marginBottom: "3%"
        }}
      >
        {roles.map(role => {
          return (
            <Grid item xs={11} style={{ marginTop: "5%" }}>
              <ServiceCard role={role} />
            </Grid>
          );
        })}
      </Grid>
      <WaveBottom colorBottom="black" />
      <div
        className={classes.container}
        style={{
          backgroundColor: "black",
          justifyContent: "center"
        }}
      >
        <Typography variant="h4" className={classes.header} gutterBottom>
          The roles above were defined with respect to specific experience we
          each have, and are representative of the commitment we have towards
          working through the entire development process. We encourage you to
          learn more about our backgrounds and experience, with specific
          examples of how we might serve each role we defined.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3%",
            width: "30%"
          }}
        >
          <Button
            style={{
              height: "3rem",
              width: "10rem",
              fontSize: "1rem"
            }}
            href="/about"
            variant="contained"
            color="secondary"
          >
            About Us
          </Button>
          <Button
            style={{
              height: "3rem",
              width: "10rem",
              fontSize: "1rem"
            }}
            href="/sample-work"
            variant="contained"
            color="secondary"
          >
            Sample Work
          </Button>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ServicesPage);
