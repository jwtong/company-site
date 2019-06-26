import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Linkedin } from "mdi-material-ui";

const styles = (theme: {
  palette: { primary: { main: string | undefined } };
}) =>
  createStyles({
    left: {
      color: "white !important",
      fontFamily: "Roboto Condensed",
      fontSize: "1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: ".65rem"
      }
    },
    right: { display: "flex", justifyContent: "flex-end" },
    container: {
      height: "8vh",
      display: "flex",
      justifyContent: "space-between",
      padding: "0% 5% 0% 5%",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        height: "75px"
      },
      [theme.breakpoints.down("xs")]: {
        height: "50.5px"
      }
    },
    icon: {
      fontSize: "2rem",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  mainText: string;
  email?: string;
  linkedIn?: string;
}

const Footer = ({ classes, mainText, email, linkedIn }: Props) => {
  return (
    <footer>
      <div className={classes.container}>
        <div>
          <Typography variant="h6" className={classes.left}>
            {mainText}
          </Typography>
        </div>
        <div className={classes.right}>
          {email && (
            <IconButton
              aria-label="Link to email"
              className={classes.icon}
              href={`mailto:${email}`}
            >
              <MailIcon fontSize="inherit" />
            </IconButton>
          )}
          {linkedIn && (
            <IconButton
              aria-label="Link to LinkedIn"
              className={classes.icon}
              href={linkedIn}
            >
              <Linkedin fontSize="inherit" />
            </IconButton>
          )}
        </div>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
