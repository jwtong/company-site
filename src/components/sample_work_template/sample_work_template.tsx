import {
  withStyles,
  createStyles,
  WithStyles,
  Typography,
  Grid,
  Chip
} from "@material-ui/core";
import React from "react";
import Hero from "../hero";
import ServicePopovers from "../service_popovers";
import technologyColorMap from "../../utils/technologies";
import SubtitleDivider from "../subtitle_divider";

const styles = createStyles({
  headerWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "10%",
    paddingLeft: "10%",
    alignItems: "center"
  },
  header: {
    color: "white !important",
    textAlign: "center"
  },
  mainContentWrapper: {
    padding: "0% 15% 0% 15%",
    alignItems: "stretch",
    marginBottom: "3%"
  }
});

interface Props extends WithStyles<typeof styles> {
  children: any;
  title: string;
  subtitle: string;
  roles: Array<{ title: string; icon: any }>;
  technologies: Array<string>;
}

const SampleWorkTemplate = ({
  children,
  title,
  subtitle,
  roles,
  technologies,
  classes
}: Props) => {
  return (
    <>
      <Hero colorBottom={"white"}>
        <div className={classes.headerWrapper}>
          <Typography
            variant={title.length > 14 ? "h2" : "h1"}
            className={classes.header}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h4" className={classes.header}>
            {subtitle}
          </Typography>
        </div>
      </Hero>
      <div className={classes.mainContentWrapper}>
        {children}
        <SubtitleDivider
          text={"Services Provided"}
          containerStyle={{ marginTop: "3%", marginBottom: "3%" }}
        />
        <ServicePopovers roles={roles} />
        <SubtitleDivider
          text={"Technologies"}
          containerStyle={{ marginTop: "3%", marginBottom: "3%" }}
        />
        <Grid justify="center" container spacing={1}>
          {technologies.map((t: string) => {
            return (
              <Grid key={t} item>
                <Chip
                  variant="outlined"
                  style={{
                    color: technologyColorMap[t],
                    borderColor: technologyColorMap[t]
                  }}
                  label={t}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default withStyles(styles)(SampleWorkTemplate);
