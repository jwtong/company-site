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
  Typography,
  List,
  ListItem,
  ListItemText,
  withWidth
} from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "../components/service_card";
import Hero from "../components/hero";
import WaveBottom from "../components/wave_bottom";
import PageBottom from "../components/page_bottom";
import roles from "../utils/roles";
import { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme => ({
  grid: {
    width: "100%"
  },
  button: {
    width: "11rem"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justify: "space-around",
      height: "100px",
      width: "100%"
    }
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  roleWrapper: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
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
  serviceCardWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
});

const ServicesPage = props => {
  const { classes, width } = props;
  return (
    <>
      <Hero colorBottom="white">
        <Typography variant="h1" className={classes.header} gutterBottom>
          Services
        </Typography>
        <Typography variant="h4" className={classes.header}>
          Our core product is code, but we never expect you to come to us with a
          complete blueprint of your idea. We offer any combination of the
          following roles to ensure that we can help you along at any stage.
        </Typography>
      </Hero>
      <div className={classes.roleWrapper}>
        {roles.map(role => {
          return (
            <div className={classes.serviceCardWrapper}>
              <ServiceCard key={role.title} role={role} />
            </div>
          );
        })}
      </div>
      <PageBottom>
        <Typography variant="h4" className={classes.header} gutterBottom>
          Learn more about our experience in each of these roles
        </Typography>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            href="/about"
            variant="contained"
            color="secondary"
          >
            About Us
          </Button>
          <Button
            className={classes.button}
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

export default withWidth()(withStyles(styles)(ServicesPage));
