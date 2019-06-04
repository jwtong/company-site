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
import PageBottom from "../components/page_bottom";
import roles from "../utils/roles";

const styles = theme => ({
  // mIcon: {
  //   color: "red"
  // },
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
        direction="column"
        alignItems="center"
        alignContent="center"
        style={{
          fontSize: "10em",
          marginBottom: "3%",
          width: "100%"
        }}
      >
        {roles.map(role => {
          return (
            <Grid key={role.title} item xs={11} style={{ marginTop: "5%" }}>
              <ServiceCard role={role} />
            </Grid>
          );
        })}
      </Grid>
      <PageBottom>
        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Learn more about our experience in each of these roles
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3%",
            width: "25%"
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
      </PageBottom>
    </>
  );
};

export default withStyles(styles)(ServicesPage);
