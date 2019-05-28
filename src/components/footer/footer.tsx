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
      fontFamily: "Lato",
      fontSize: "14px"
    },
    right: { display: "flex", justifyContent: "flex-end" },
    container: {
      height: "8vh",
      display: "flex",
      justifyContent: "space-between",
      padding: "0% 5% 0% 5%",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main
    },
    icon: {
      fontSize: "30px",
      color: "white"
    }
  });

interface Props extends WithStyles<typeof styles> {
  mainText: string;
  email?: string;
  linkedIn?: string;
}

class Footer extends React.Component<Props> {
  public render() {
    const { classes, mainText, email, linkedIn } = this.props;
    return (
      <footer>
        <div className={classes.container}>
          <div className={classes.left}>{mainText}</div>
          <div className={classes.right}>
            {email && (
              <IconButton className={classes.icon} href={`mailto:${email}`}>
                <MailIcon fontSize="inherit" />
              </IconButton>
            )}
            {linkedIn && (
              <IconButton className={classes.icon} href={linkedIn}>
                <Linkedin fontSize="inherit" />
              </IconButton>
            )}
          </div>
        </div>
      </footer>
    );
  }
}
export default withStyles(styles)(Footer);
