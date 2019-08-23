import React from "react";
import {
  Typography,
  createStyles,
  withStyles,
  WithStyles
} from "@material-ui/core";
import Hero from "../components/Hero";

const styles = createStyles({
  header: {
    color: "white !important",
    textAlign: "center"
  }
});

interface Props extends WithStyles<typeof styles> {}

const NotFoundPage = ({ classes }: Props) => (
  <>
    <Hero colorBottom={"white"}>
      <Typography variant="h1" className={classes.header} gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h4" className={classes.header}>
        Click a link above to return to knit's site
      </Typography>
    </Hero>
  </>
);

export default withStyles(styles)(NotFoundPage);
