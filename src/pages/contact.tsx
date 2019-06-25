import React from "react";
import {
  Typography,
  createStyles,
  withStyles,
  Card,
  Tabs,
  Tab,
  Slide,
  WithStyles,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import Hero from "../components/Hero";
import moment from "moment";
import ContactForm from "../components/ContactForm";
import ProjectForm from "../components/ProjectForm";
import clsx from "clsx";
import { graphql } from "gatsby";
import SiteHelmet from "../components/SiteHelmet";

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
      [theme.breakpoints.down("md")]: {
        height: "1175px"
      },
      [theme.breakpoints.down("sm")]: {
        height: "1150px"
      },
      [theme.breakpoints.down("xs")]: {
        height: "1300px"
      }
    },
    snackbar: {
      fontSize: "1rem",
      textAlign: "center",
      marginBottom: "10%",
      width: "70%",
      padding: "2%"
    },
    errorSnackbar: {
      backgroundColor: theme.palette.secondary.main
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: any;
}

interface State {
  form: "gi" | "ps" | null;
  openSuccess: boolean;
  openFailure: boolean;
  nameError: string | null;
}

class ContactPage extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      form: null,
      openSuccess: false,
      openFailure: false,
      nameError: null
    };
  }

  public componentDidMount() {
    this.setState({ form: "gi" });
  }

  private getSnackbar = (children: any, open: string, otherProps?: any) => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={() => {
          this.setState({ [open]: false });
        }}
        open={this.state[open]}
        TransitionComponent={Slide}
        TransitionProps={{
          direction: "up"
        }}
        {...otherProps}
      >
        {children}
      </Snackbar>
    );
  };
  private renderSnackbars = () => {
    const { classes } = this.props;
    return (
      <>
        {this.getSnackbar(
          <SnackbarContent
            className={classes.snackbar}
            message="Thanks for reaching out! We've recieved your inquiry and will contact you soon."
          />,
          "openSuccess",
          {
            variant: "success"
          }
        )}
        {this.getSnackbar(
          <SnackbarContent
            className={clsx(classes.snackbar, classes.errorSnackbar)}
            message="Sorry, there was an error submitting the form. You can also reach us by email at _____@mail.com"
          />,
          "openFailure",
          {
            variant: "failure"
          }
        )}
      </>
    );
  };

  public render() {
    const { classes, data } = this.props;
    return (
      <>
        <SiteHelmet
          description={`Contact ${data.site.siteMetadata.companyName}`}
          title={"Contact"}
        />
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
                  successCallback={() => {
                    this.setState({ openSuccess: true });
                  }}
                  failureCallback={() => {
                    this.setState({ openFailure: true });
                  }}
                  formEndpoint={data.site.siteMetadata.contactFormEndpoint}
                />
              </Slide>
              <Slide
                direction="left"
                in={this.state.form === "ps"}
                timeout={1000}
              >
                <ProjectForm
                  successCallback={() => {
                    this.setState({ openSuccess: true });
                  }}
                  failureCallback={() => {
                    this.setState({ openFailure: true });
                  }}
                  formEndpoint={data.site.siteMetadata.projectFormEndpoint}
                  containerStyle={{
                    display: this.state.form === "gi" ? "none" : "block"
                  }}
                />
              </Slide>
            </div>
            {this.renderSnackbars()}
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
