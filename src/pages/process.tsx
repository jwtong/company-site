import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import Image from "../components/image";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Chat from "@material-ui/icons/Chat";
import { ViewDashboardOutline, Rocket } from "mdi-material-ui";
import Code from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";

import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "../components/service_card";
import Hero from "../components/hero";
import WaveBottom from "../components/wave_bottom";
import SubtitleDivider from "../components/subtitle_divider";
import PageBottom from "../components/page_bottom";

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

const ProcessPage = props => {
  const { classes } = props;
  const steps = [
    {
      title: "Step 1 - Contact Us",
      icon: FormatAlignLeft,
      texts: [
        "Fill out the initial survey on our “Contact Us” page with details about your project, your timeframe, and anything else you’d like to let us know from the start. If you have a unique request, you may also email us directly. Once received, we’ll get back to you within 2 business days."
      ]
    },
    {
      title: "Step 2 - Initial Chat",
      icon: Chat,
      texts: [
        "If we reach out and let you know we think it might be a good fit, we’ll schedule a quick 15-minute call so we can properly introduce ourselves and make sure we're both on the same page."
      ]
    },
    {
      title: "Step 3 - Project Blueprint",
      icon: ViewDashboardOutline,
      texts: [
        "After the introduction, the next step will be for us to draft a project blueprint. In this blueprint, we will outline the project scope, propose our recommended software technologies to use on the project, draft initial specification documents, and also possible design mockups if requested.",
        "Depending on the size of the project and pre-work required, we may charge a non-refundable hourly rate for this work, though we will take the amount out of the final contracting fee agreed upon between parties. However, if you decide not to work with us after this step, you own your project blueprint and are free to take and use it as you wish."
      ]
    },
    {
      title: "Step 4 - Project Work",
      icon: Code,
      texts: [
        "Once the project blueprint is signed off and a formal contract is agreed upon, we’ll begin working, and provide you with weekly updates on progress."
      ]
    },
    {
      title: "Step 5 - Launch",
      icon: Rocket,
      texts: [
        "Before launching, we’ll walk through a project demo together to make sure we have addressed all the points in the project blueprint. Once you’re satisfied with the product, we’ll launch your application live and celebrate together!"
      ]
    }
  ];

  return (
    <>
      <Hero colorBottom="white">
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center"
          }}
        >
          <Typography variant="h1" className={classes.header} gutterBottom>
            Process
          </Typography>
          <Typography variant="h4" className={classes.header}>
            A breakdown of how we conduct a project
          </Typography>
        </div>
      </Hero>
      <div
        style={{
          marginBottom: "3%",
          marginTop: "3%",
          paddingLeft: "10%",
          paddingRight: "10%"
        }}
      >
        {steps.map(s => {
          return (
            <div key={s.title}>
              <SubtitleDivider
                text={s.title}
                containerStyle={{ marginBottom: "3%", marginTop: "6%" }}
              />

              <Grid alignItems="center" container direction="row">
                <Grid item xs={3} className={classes.grid}>
                  <Card
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      flexGrow: "1",
                      // backgroundColor: "red",
                      fontSize: "5em",
                      height: "200px",
                      width: "200px"
                    }}
                  >
                    {React.createElement(s.icon, {
                      fontSize: "inherit",
                      color: "secondary"
                    })}
                  </Card>
                </Grid>
                <Grid item xs={8}>
                  {s.texts.map((t, index) => {
                    return (
                      <Typography
                        variant="subtitle1"
                        style={{ textAlign: "left" }}
                        key={`${s.title}${index}`}
                      >
                        {t}
                        {index !== s.texts.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
      <PageBottom>
        <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Learn more about what types of work we can do for you
          </Typography>
        </div>
        <Button
          style={{
            height: "3rem",
            width: "10rem",
            fontSize: "1rem",
            marginTop: "3%"
          }}
          href="/services"
          variant="contained"
          color="secondary"
        >
          Services
        </Button>
      </PageBottom>
    </>
  );
};

export default withStyles(styles)(ProcessPage);
