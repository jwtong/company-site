import {
  Card,
  Grid,
  Typography,
  withStyles,
  createStyles,
  WithStyles
} from "@material-ui/core";
import React from "react";

const styles = (theme: { palette: { secondary: { light: any } } }) =>
  createStyles({
    card: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingRight: theme.spacing(15),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(0)
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        textAlign: "center"
      },
      borderTop: `6px solid ${theme.palette.secondary.light}`
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.secondary.light,
      fontSize: "10rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "7rem"
      }
    },
    serviceTitle: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem"
      }
    },
    serviceDescription: {
      lineHeight: 1.75,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  role: { title: string; icon: any; text: string };
}

const ServiceCard = ({ role: { title, icon, text }, classes }: Props) => (
  <Card key={title} className={classes.card}>
    <Grid container direction="row" spacing={1}>
      <Grid item xs={12} sm={4} md={4} className={classes.grid}>
        {React.createElement(icon, {
          fontSize: "inherit",
          color: "inherit"
        })}
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Typography
              className={classes.serviceTitle}
              variant="h3"
              gutterBottom
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              className={classes.serviceDescription}
              gutterBottom
            >
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default withStyles(styles)(ServiceCard);
