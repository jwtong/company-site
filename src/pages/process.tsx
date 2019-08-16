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
import { graphql, Link } from "gatsby";

const styles = (theme: any) => ({
  button: {
    width: "12rem"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3%",
    width: "35%",
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
  processContainer: {
    width: "100%",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(4)
    },
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
  dividerWithMargin: dividerWithMargin(theme),
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    fontSize: "5em",
    height: "200px",
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      height: "150px",
      width: "150px"
    }
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
});

interface Props extends WithStyles<typeof styles> {
  data: any;
}

const ProcessPage = ({ classes, data }: Props) => {
  const steps = [
    {
      title: "Step 1 - Contact us",
      icon: FormatAlignLeft,
      texts: [
        "Fill out the project form on our Contact page with as much detail as you'd like. If you have an unusual request, feel free to use the general inquiries form or email us directly. We'll follow up within 2 business days."
      ]
    },
    {
      title: "Step 2 - Initial chat",
      icon: Chat,
      texts: [
        "If it appears we might be a good fit, we’ll schedule a quick 15-minute call to properly introduce ourselves. This is also a good opportunity to let us know your budget."
      ]
    },
    {
      title: "Step 3 - Project blueprint",
      icon: ViewDashboardOutline,
      texts: [
        "Here we'll outline project scope, propose software technology options, draft initial specification documents, and provide design mockups (if requested).",
        "Depending on the size and scope of your project, we may charge an initial fee at this stage. If we move forward from here, this charge will count toward the final contracting fee agreed upon between parties. If you decide after this step you'd like to go in a different direction, you own your project blueprint and are free to use it as you wish."
      ]
    },
    {
      title: "Step 4 - Project work",
      icon: Code,
      texts: [
        "Once the project blueprint is signed off and a formal contract agreed upon, we’ll begin working. You'll be kept in the loop with regularly scheduled progress updates."
      ]
    },

    {
      title: "Step 5 - Launch",
      icon: Rocket,
      texts: [
        "Before launch, we’ll walk through a project demo together to make sure all points in the project blueprint are met. Once you’re satisfied with the product, we’ll launch your application live and celebrate!"
      ]
    }
  ];

  return (
    <>
      <SiteHelmet
        description={`A breakdown of knit's consulting process`}
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
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  lg={3}
                  className={classes.cardWrapper}
                >
                  <Card className={classes.card}>
                    {React.createElement(s.icon, {
                      fontSize: "inherit",
                      color: "secondary"
                    })}
                  </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={7} lg={8}>
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
        <Typography variant="h4">
          Learn more about our professional experience
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button
            className={classes.button}
            component={Link}
            to="/about"
            variant="contained"
            color="secondary"
            aria-label="About Us"
          >
            About Us
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="/sample-work"
            variant="contained"
            color="secondary"
            aria-label="Sample Work"
          >
            Sample Work
          </Button>
        </div>
      </PageBottom>{" "}
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
