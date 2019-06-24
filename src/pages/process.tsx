import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Chat from "@material-ui/icons/Chat";
import { ViewDashboardOutline, Rocket } from "mdi-material-ui";
import Code from "@material-ui/icons/Code";
import Grid from "@material-ui/core/Grid";
import { Typography, WithStyles } from "@material-ui/core";
import Hero from "../components/Hero";
import SubtitleDivider from "../components/SubtitleDivider";
import PageBottom from "../components/PageBottom";
import {
  buttonWithMargin,
  dividerWithMargin
} from "../components/SharedStyles";
import SiteHelmet from "../components/SiteHelmet";
import { graphql } from "gatsby";

const styles = (theme: any) => ({
  processContainer: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(4)
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    alignSelf: "center",
    "-webkit-box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "box-sizing": "border-box"
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  buttonWithMargin: buttonWithMargin(theme),
  dividerWithMargin: dividerWithMargin(theme)
});

interface Props extends WithStyles<typeof styles> {
  data: any;
}

const ProcessPage = ({ classes, data }: Props) => {
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
      <SiteHelmet
        description={`A breakdown of ${
          data.site.siteMetadata.companyName
        }'s consulting process`}
        title={"Process"}
      />
      <Hero colorBottom="white">
        <Typography variant="h1" className={classes.header} gutterBottom>
          Process
        </Typography>
        <Typography variant="h4" className={classes.header}>
          A breakdown of how we conduct a project
        </Typography>
      </Hero>
      <div className={classes.processContainer}>
        {steps.map(s => {
          return (
            <div key={s.title}>
              <SubtitleDivider
                text={s.title}
                otherProps={{ className: classes.dividerWithMargin }}
              />

              <Grid alignItems="center" container direction="row" spacing={2}>
                <Grid item xs={12} sm={4} md={3} className={classes.grid}>
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
                <Grid item xs={12} sm={8} md={8}>
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
        <Typography variant="h4" className={classes.header} gutterBottom>
          Learn more about what types of work we can do for you
        </Typography>
        <Button
          className={classes.buttonWithMargin}
          href="/services"
          variant="contained"
          color="secondary"
          aria-label="Services"
        >
          Services
        </Button>
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

export default withStyles(styles)(ProcessPage);
