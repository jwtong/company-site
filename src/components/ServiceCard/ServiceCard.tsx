import {
  Card,
  Grid,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent
} from "@material-ui/core";
import React from "react";

const styles = (theme: { palette: { secondary: { light: any } } }) =>
  createStyles({
    card: { height: "100%" },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%"
    },
    bannerWrapper: {
      padding: "1rem",
      backgroundColor: props => props.color,
      display: "flex",
      justifyContent: "center"
    },
    iconWrapper: {
      borderRadius: "100rem",
      padding: "1rem",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    icon: {
      width: "3rem",
      height: "3rem",
      color: props => props.color
    },
    title: {
      textAlign: "center",
      fontSize: "1.5rem"
    },
    text: {
      marginRight: ".5rem",
      marginLeft: ".5rem",
      marginTop: ".5rem"
    },
    bottomBar: {
      height: "1rem",
      backgroundColor: props => props.color
    }
  });

interface Props extends WithStyles<typeof styles> {
  role: { title: string; icon: any; text: string };
  color: string;
}

const ServiceCard = ({ role: { title, icon, text }, classes }: Props) => (
  <Card className={classes.card}>
    <div className={classes.contentContainer}>
      <div>
        <div className={classes.bannerWrapper}>
          <div className={classes.iconWrapper}>
            {React.createElement(icon, {
              className: classes.icon
            })}
          </div>
        </div>
        <CardContent>
          <Typography className={classes.title}>{title}</Typography>
          <div className={classes.text}>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: "1rem"
              }}
            >
              {text}
            </Typography>
          </div>
        </CardContent>
      </div>
      <div className={classes.bottomBar} />
    </div>
  </Card>
);

export default withStyles(styles)(ServiceCard);
