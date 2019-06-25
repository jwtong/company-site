import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, withWidth, Button, WithStyles } from "@material-ui/core";
import ServiceCard from "../components/ServiceCard";
import Hero from "../components/Hero";
import PageBottom from "../components/PageBottom";
import roles from "../utils/roles";
import SiteHelmet from "../components/SiteHelmet";
import { graphql } from "gatsby";

const styles = (theme: any) => ({
  grid: {
    width: "100%"
  },
  button: {
    width: "11rem"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
    width: "30%",
    [theme.breakpoints.down("md")]: {
      justify: "space-around",
      flexDirection: "column",
      alignItems: "center",
      height: "120px",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "100px",
      width: "100%"
    }
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  rolesContainer: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
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
  serviceCardWrapper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
});

interface Props extends WithStyles<typeof styles> {
  width: any;
  data: any;
}

const ServicesPage = ({ classes, width, data }: Props) => {
  return (
    <>
      <SiteHelmet
        description={`${
          data.site.siteMetadata.companyName
        }'s software development and consulting services`}
        title={"Services"}
      />
      <Hero colorBottom="white">
        <Typography variant="h1" className={classes.header} gutterBottom>
          Services
        </Typography>
        <Typography variant="h4" className={classes.header}>
          We offer versatility across a number of different professional roles
          defined below
        </Typography>
      </Hero>
      <div className={classes.rolesContainer}>
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
        <div className={classes.buttonsContainer}>
          <Button
            className={classes.button}
            href="/about"
            variant="contained"
            color="secondary"
            aria-label="About Us"
          >
            About Us
          </Button>
          <Button
            className={classes.button}
            href="/sample-work"
            variant="contained"
            color="secondary"
            aria-label="Sample Work"
          >
            Sample Work
          </Button>
        </div>
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

export default withWidth()(withStyles(styles)(ServicesPage));
