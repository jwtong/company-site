import React from "react";
import {
  Typography,
  createStyles,
  withStyles,
  Card,
  Tabs,
  Tab,
  Slide
} from "@material-ui/core";
import Hero from "../components/Hero";
import * as moment from "moment";
import ContactForm from "../components/ContactForm";
import ProjectForm from "../components/ProjectForm";
import clsx from "clsx";
import { graphql } from "gatsby";

const styles = (theme: any) =>
  createStyles({
    header: {
      color: "white !important",
      textAlign: "center"
    },
    card: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(6)
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      },
      borderTop: `6px solid ${theme.palette.secondary.light}`,
      textAlign: "center",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch"
    },
    textField: {
      width: "300px"
    },
    topContainer: {
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
      [theme.breakpoints.down("md")]: {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(10)
      },
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    },
    formsContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "-webkit-box-sizing": "border-box",
      "-moz-box-sizing": "border-box",
      "box-sizing": "border-box",
      paddingRight: theme.spacing(25),
      paddingLeft: theme.spacing(25),
      //prevent screen widening
      [theme.breakpoints.down("md")]: {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(10)
      },
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    },
    contentWrapper: {
      marginBottom: "5%",
      display: "flex",
      flexDirection: "column"
    },
    contactForm: {
      height: "525px",
      [theme.breakpoints.down("xs")]: {
        height: "530px"
      }
    },
    projectForm: {
      height: "1100px",
      [theme.breakpoints.down("xs")]: {
        height: "1200px"
      }
    }
  });

class ContactPage extends React.Component {
  public constructor(props) {
    super(props);
    this.state = { form: null, open: false, nameError: null };
  }

  public componentDidMount() {
    this.setState({ form: "gi" });
  }

  public render() {
    const { classes, data } = this.props;
    return (
      <>
        <Hero colorBottom={"white"}>
          <Typography variant="h1" className={classes.header} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Fill out one of the two forms below, and we'll get back to you
            within 2 days
          </Typography>
        </Hero>
        <div className={classes.mainContainer}>
          <div className={classes.topContainer}>
            <Card className={classes.card}>
              <Typography variant="h4" gutterBottom>
                Status
              </Typography>
              <Typography color="secondary" variant="h3" gutterBottom>
                Available
              </Typography>
              <Typography variant="h5">
                {data.site.siteMetadata.companyName} is currently seeking new
                projects in {moment().format("MMMM, YYYY")}
              </Typography>
            </Card>
            <div>
              <Tabs
                action={actions =>
                  setTimeout(actions.updateIndicator.bind(actions), 0)
                }
                value={this.state.form}
                onChange={(_, value) => {
                  this.setState({ form: value });
                }}
              >
                <Tab value="gi" label="General Inquiries" />
                <Tab value="ps" label="Project Specific" />
              </Tabs>
            </div>
          </div>
          <div
            className={clsx(
              classes.contentWrapper,
              this.state.form === "gi" && classes.contactForm,
              this.state.form === "ps" && classes.projectForm
            )}
          >
            <div className={classes.formsContainer}>
              <Slide
                direction="right"
                in={this.state.form === "gi"}
                timeout={1000}
              >
                <ContactForm
                  formEndpoint={data.site.siteMetadata.contactFormEndpoint}
                />
              </Slide>
              <Slide
                direction="left"
                in={this.state.form === "ps"}
                timeout={1000}
              >
                <ProjectForm
                  formEndpoint={data.site.siteMetadata.projectFormEndpoint}
                  containerStyle={{
                    display: this.state.form === "gi" ? "none" : "block"
                  }}
                />
              </Slide>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        companyName
        contactFormEndpoint
        projectFormEndpoint
      }
    }
  }
`;

export default withStyles(styles)(ContactPage);
