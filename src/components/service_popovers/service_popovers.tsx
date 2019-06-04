import {
  Card,
  Grid,
  withStyles,
  createStyles,
  WithStyles
} from "@material-ui/core";
import React from "react";
import StandardPopover from "../standard_popover";

const styles = (theme: { palette: { secondary: { light: any } } }) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "stretch",
      flexGrow: 1,
      fontSize: "4em",
      height: "70px",
      width: "70px"
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.secondary.light
    }
  });

interface Props extends WithStyles<typeof styles> {
  roles: Array<{ title: string; icon: any }>;
}

const ServicePopovers = ({ roles, classes }: Props) => (
  <Grid container spacing={3} direction="row" justify="center">
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

export default withStyles(styles)(ServicePopovers);
