import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";
import Grid from "@material-ui/core/Grid";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import StandardPopover from "../../components/standard_popover";

const useStyles = makeStyles({
  mIcon: {
    color: "black"
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  centerer: {
    justifyContent: "center"
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

const JugglePage = () => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.container}
        style={{
          backgroundColor: "orange",
          justifyContent: "center"
        }}
      >
        <Typography component="h4" variant="h4">
          Relevant Services
        </Typography>
        <Grid
          container
          spacing={24}
          direction="column"
          justify="flex-start"
          alignItems="stretch"
          alignContent="center"
          style={{
            paddingTop: "2%",
            paddingBottom: "2%"
          }}
        >
          <Grid item xs="11">
            <StandardPopover popoverText={"Software Developer"}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  padding: "2% 5% 2% 5%",
                  fontSize: "4em",
                  height: "70px",
                  width: "70px"
                }}
              >
                <Code fontSize="inherit" className={classes.mIcon} />
              </Card>
            </StandardPopover>
          </Grid>
          <Grid item xs="11">
            <StandardPopover popoverText={"UI/UX Designer"}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  padding: "2% 5% 2% 5%",
                  fontSize: "4em",
                  height: "70px",
                  width: "70px"
                }}
              >
                <PaletteOutlined fontSize="inherit" className={classes.mIcon} />
              </Card>
            </StandardPopover>
          </Grid>
          <Grid item xs="11">
            <StandardPopover popoverText={"Business Logic Analyst"}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  padding: "2% 5% 2% 5%",
                  fontSize: "4em",
                  height: "70px",
                  width: "70px"
                }}
              >
                <BusinessCenterOutlined
                  fontSize="inherit"
                  className={classes.mIcon}
                />
              </Card>
            </StandardPopover>
          </Grid>
          <Grid item xs="11">
            <StandardPopover popoverText={"Project Management"}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  flexGrow: "1",
                  // backgroundColor: "red",
                  padding: "2% 5% 2% 5%",
                  fontSize: "4em",
                  height: "70px",
                  width: "70px"
                }}
              >
                <AssignmentOutlined
                  fontSize="inherit"
                  className={classes.mIcon}
                />
              </Card>
            </StandardPopover>
          </Grid>
          <Grid item xs="11" />
        </Grid>
      </div>
    </>
  );
};

export default JugglePage;
