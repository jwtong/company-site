import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Linkedin } from "mdi-material-ui";

const useStyles = makeStyles({
  header: {
    color: "white !important",
    fontFamily: "Lato",
    fontSize: "14px"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <div
        style={{
          backgroundColor: "black",
          height: "8vh",
          display: "flex",
          justifyContent: "space-between",
          padding: "0% 5% 0% 5%",
          alignItems: "center"
        }}
      >
        <div className={classes.header}>
          Coded with ReactJS and GatsbyJS by ______ © {new Date().getFullYear()}
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
};
export default Footer;
