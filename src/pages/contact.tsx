import React from "react";
import { graphql } from "gatsby";
import MaskedInput from "react-text-mask";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  Divider,
  Chip,
  createStyles,
  withStyles,
  Card,
  Tabs,
  Tab,
  AppBar,
  InputLabel,
  FormHelperText,
  Input,
  FormControl,
  TextField,
  Select,
  OutlinedInput,
  Slide,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import Img from "gatsby-image/withIEPolyfill";
import Hero from "../components/Hero";
import WaveBottom from "../components/WaveBottom";
import SubtitleDivider from "../components/SubtitleDivider";
import PageBottom from "../components/PageBottom";
import technologyColorMap from "../utils/technologies";
import {
  buttonWithMargin,
  dividerWithMargin
} from "../components/SharedStyles";
import * as moment from "moment";
import MaskedTextField from "../components/MaskedTextField";
import SelectTextField from "../components/SelectTextField";
import ContactForm from "../components/ContactForm";
import ProjectForm from "../components/ProjectForm";
// import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = theme =>
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
        paddingLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
      },
      borderTop: `6px solid ${theme.palette.secondary.light}`,
      textAlign: "center",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
    availabilityWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      paddingLeft: "15%",
      paddingRight: "15%"
    },
    textField: {
      width: "300px"
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

  private getForm1 = classes => {
    return (
      <form
        action="/"
        method="POST"
        onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.target);
          for (var key of data.keys()) {
            console.log(key);
          }

          const value = data.get("name");
          if (!value) {
            this.setState({ nameError: "required" });
            return false;
          }
          return true;
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <TextField
              InputProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              style={{ marginRight: "5%" }}
              label="Name *"
              className={classes.textField}
              type="name"
              name="name"
              margin="normal"
              variant="outlined"
              error={!!this.state.nameError}
              helperText={this.state.nameError}
              onBlur={event => {
                event.preventDefault();
                console.log(event.currentTarget.value);
                if (!event.currentTarget.value) {
                  this.setState({ nameError: "required" });
                } else {
                  this.setState({ nameError: null });
                }
              }}
            />
            <TextField
              InputProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
          </div>
          <TextField
            style={{ width: "100%" }}
            label="Message"
            className={classes.textField}
            InputProps={{
              style: {
                fontSize: "1.25rem"
              }
            }}
            InputLabelProps={{
              style: {
                fontSize: "1.25rem"
              }
            }}
            name="message"
            margin="normal"
            variant="outlined"
            multiline
            rows={10}
          />
          <Button
            color="secondary"
            variant="contained"
            style={{
              width: "200px",
              alignSelf: "center",
              marginTop: "3%"
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    );
  };

  private getForm2 = classes => {
    return (
      <form
        action="/"
        method="POST"
        onSubmit={e => {
          e.preventDefault();
          this.setState({ open: true });
        }}
      >
        <div>
          <div
            style={{
              marginTop: "2%",
              display: "flex",
              flexDirection: "column",
              alignSelf: "stretch"
            }}
          >
            <Typography variant="h6">General Info</Typography>
            <Divider style={{ height: "2px", backgroundColor: "black" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <TextField
                autoComplete={name}
                style={{ marginRight: "5%" }}
                InputProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                label="Name"
                className={classes.textField}
                name="name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                InputProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                label="Location"
                helperText="city / state"
                className={classes.textField}
                name="location"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <TextField
                style={{ marginRight: "5%" }}
                InputProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                label="Email"
                className={classes.textField}
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onBlur={() => {
                  console.log("HERERE");
                }}
              />
              <MaskedTextField
                variant="outlined"
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  "-",

                  /\d/,
                  /\d/,
                  /\d/,

                  "-",

                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
                style={{
                  marginTop: "16px",
                  marginBottom: "8px",
                  width: "300px"
                }}
                autoComplete="tel"
                name="phone"
                label="Phone"
                InputProps={{
                  style: {
                    fontSize: "1.25rem"
                  },
                  labelWidth: 70
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
              />
            </div>

            <Typography style={{ marginTop: "2%" }} variant="h6">
              Project Info
            </Typography>
            <Divider style={{ height: "2px", backgroundColor: "black" }} />
            <TextField
              style={{ width: "100%" }}
              label="Project / Idea Description"
              className={classes.textField}
              InputProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              name="description"
              margin="normal"
              variant="outlined"
              multiline
              rows={10}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <SelectTextField
                variant="outlined"
                className={classes.textField}
                SelectProps={{ native: true, style: { fontSize: "1.25rem" } }}
                InputLabelProps={{ style: { fontSize: "1.25rem" } }}
                InputProps={{ style: { fontSize: "1.25rem" }, labelWidth: 150 }}
                style={{
                  marginTop: "16px",
                  marginBottom: "8px",
                  marginRight: "5%"
                }}
                label={"Application Type"}
                name={"applicationType"}
                options={[
                  { label: "", value: "" },
                  { label: "Web", value: "web" },
                  { label: "Mobile", value: "mobile" },
                  { label: "Other", value: "other" },
                  { label: "Unsure", value: "unsure" }
                ]}
              />
              <TextField
                InputProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.25rem"
                  }
                }}
                label="Timeframe"
                helperText="approximate target"
                className={classes.textField}
                name="timeframe"
                margin="normal"
                variant="outlined"
              />
            </div>
            <Typography style={{ marginTop: "2%" }} variant="h6">
              Other
            </Typography>
            <Divider style={{ height: "2px", backgroundColor: "black" }} />
            <TextField
              style={{ width: "100%" }}
              label="Anything Else We Should Know"
              className={classes.textField}
              InputProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: "1.25rem"
                }
              }}
              name="misc"
              margin="normal"
              variant="outlined"
              multiline
              rows={5}
            />

            <Button
              type="submit"
              color="secondary"
              variant="contained"
              style={{
                width: "200px",
                alignSelf: "center",
                marginTop: "3%"
              }}
            >
              Submit
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              autoHideDuration={3000}
              onClose={() => {
                this.setState({ open: false });
              }}
              open={this.state.open}
              TransitionComponent={Slide}
              TransitionProps={{
                direction: "up"
              }}
              variant="success"
            >
              <SnackbarContent
                style={{ backgroundColor: "green", fontSize: "30px" }}
                message="This is a success message!"
              />
            </Snackbar>
          </div>
        </div>
      </form>
    );
  };

  public render() {
    const { classes } = this.props;
    return (
      <>
        <Hero colorBottom={"white"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center"
            }}
          >
            <Typography variant="h1" className={classes.header} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h4" className={classes.header}>
              Fill out one of the two forms below, and we'll get back to you
              within 2 days
            </Typography>
          </div>
        </Hero>
        <div className={classes.availabilityWrapper}>
          <Card className={classes.card}>
            <Typography variant="h4" gutterBottom>
              Status
            </Typography>
            <Typography color="secondary" variant="h3" gutterBottom>
              Available
            </Typography>
            <Typography variant="h5">
              Knit is currently seeking new projects in{" "}
              {moment().format("MMMM, YYYY")}
            </Typography>
          </Card>
          <div
            style={{
              marginBottom: "5%",
              display: "flex",
              flexDirection: "column",
              height: this.state.form === "gi" ? "525px" : "1100px"
            }}
          >
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
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%"
              }}
            >
              <Slide
                direction="right"
                in={this.state.form === "gi"}
                timeout={1000}
              >
                <ContactForm />
              </Slide>
              <Slide
                direction="left"
                in={this.state.form === "ps"}
                timeout={1000}
              >
                <ProjectForm
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

export default withStyles(styles)(ContactPage);
