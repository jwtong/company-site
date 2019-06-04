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
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingRight: "15%",
      borderTop: `6px solid ${theme.palette.secondary.light}`
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.secondary.light
    }
  });

interface Props extends WithStyles<typeof styles> {
  role: { title: string; icon: any; text: string };
}

const ServiceCard = ({ role: { title, icon, text }, classes }: Props) => (
  <Card key={title} className={classes.card}>
    <Grid container direction="row">
      <Grid item xs={4} className={classes.grid}>
        {React.createElement(icon, {
          fontSize: "inherit",
          color: "inherit"
        })}
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Card>
);

export default withStyles(styles)(ServiceCard);
