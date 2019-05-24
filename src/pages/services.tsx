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
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
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
};

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
      <div
        className={classes.container}
        style={{
          backgroundColor: "orange",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "10%",
            paddingLeft: "10%",
            alignItems: "center"
          }}
        >
          <Typography variant="h2" className={classes.header} gutterBottom>
            Services
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Our core product is code, but we never expect you to come to us with
            a complete blueprint of your idea. We offer any combination of the
            following roles to ensure that we can help you along at any stage.
          </Typography>
        </div>
      </div>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        alignContent="center"
        style={{
          backgroundColor: "blue",
          fontSize: "10em"
        }}
      >
        {roles.map(role => {
          return (
            <Grid item xs={11}>
              <Card
                key={role.title}
                style={{
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  paddingRight: "15%"
                }}
              >
                <Grid container direction="row">
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    {React.createElement(role.icon, {
                      fontSize: "inherit",
                      className: classes.mIcon
                    })}
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={3} direction="column">
                      <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                          {role.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                          {role.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div
        className={classes.container}
        style={{
          backgroundColor: "green",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "10%",
            paddingLeft: "10%",
            alignItems: "center"
          }}
        >
          <Typography component="h5" variant="h5" className={classes.header}>
            The roles above were defined with respect to specific experience we
            each have, and are representative of the commitment we have towards
            working through the entire development process. We encourage you to
            learn more about our backgrounds and experience, with specific
            examples of how we might serve each role we defined.
          </Typography>
          <Button href="/about" variant="outlined" color="secondary">
            About Us
          </Button>
          <Button href="/sample-work" variant="outlined" color="secondary">
            Sample Work
          </Button>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ServicesPage);
