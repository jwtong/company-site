import {
  Card,
  Grid,
  withStyles,
  createStyles,
  WithStyles,
  withWidth
} from "@material-ui/core";
import React from "react";
import StandardPopover from "../standard_popover";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { isWidthDown } from "@material-ui/core/withWidth";

const styles = (theme: { palette: { secondary: { light: any } } }) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "stretch",
      flexGrow: 1,
      fontSize: "4rem",
      height: "5rem",
      width: "5rem",
      [theme.breakpoints.down("md")]: {
        height: "3.5rem",
        width: "3.5rem",
        fontSize: "3rem"
      }
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.secondary.light
    }
  });

interface Props extends WithStyles<typeof styles> {
  roles: Array<{ title: string; icon: any }>;
  width: Breakpoint;
}

const ServicePopovers = ({ roles, classes, width }: Props) => (
  <Grid
    container
    spacing={isWidthDown("md", width) ? 2 : 3}
    direction="row"
    justify="center"
  >
    {roles.map((role: any) => {
      return (
        <Grid item key={role.title}>
          <StandardPopover popoverText={role.title}>
            <Card className={classes.card}>
              {React.createElement(role.icon, {
                fontSize: "inherit",
                color: "secondary"
              })}
            </Card>
          </StandardPopover>
        </Grid>
      );
    })}
  </Grid>
);

export default withWidth()(withStyles(styles)(ServicePopovers));
