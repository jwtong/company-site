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

const styles = theme =>
  createStyles({
    header: {
      color: "white !important",
      textAlign: "center"
    },
    title: {
      [theme.breakpoints.down("md")]: {
        fontSize: props => (props.title.length > 20 ? "2.5rem" : "3.5rem")
      }
    },
    mainContentWrapper: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      },
      alignItems: "stretch",
      marginBottom: "3%"
    },
    skillsGrid: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginBottom: theme.spacing(3)
      }
    },
    divider: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      }
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
        <Typography
          variant="h1"
          className={`${classes.header} ${classes.title}`}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h4" className={classes.header}>
          {subtitle}
        </Typography>
      </Hero>
      <div className={classes.mainContentWrapper}>
        {children}
        <SubtitleDivider
          text={"Services Provided"}
          otherProps={{ className: classes.divider }}
        />
        <ServicePopovers roles={roles} />
        <SubtitleDivider
          text={"Technologies"}
          otherProps={{ className: classes.divider }}
        />
        <Grid
          className={classes.skillsGrid}
          justify="center"
          container
          spacing={1}
        >
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
