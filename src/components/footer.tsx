import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Linkedin } from "mdi-material-ui";

const styles = theme => ({
  header: {
    color: "white !important",
    fontFamily: "Lato",
    fontSize: "14px"
  },
  container: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "0% 5% 0% 5%",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main
  }
});

class Footer extends React.Component {
  public render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <footer>
        <div className={classes.container}>
          <div className={classes.header}>
            Coded with ReactJS and GatsbyJS by ______ ©{" "}
            {new Date().getFullYear()}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              style={{ fontSize: "30px", color: "white" }}
              href="mailto:abc@example.com"
            >
              <MailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              style={{ fontSize: "30px", color: "white" }}
              href="https://www.linkedin.com"
            >
              <Linkedin fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
