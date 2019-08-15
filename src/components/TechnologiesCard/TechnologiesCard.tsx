import {
  Card,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent,
  ListItem,
  List,
  ListItemText,
  Grid
} from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { ColorLuminance } from "../../utils/technologies";

const styles = (theme: any) =>
  createStyles({
    card: {
      backgroundColor: "white",
      height: "100%"
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      // backgroundColor: theme.palette.secondary.light,
      // paddingTop: theme.spacing(2),
      // paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      fontSize: "6em",
      [theme.breakpoints.down("xs")]: {
        fontSize: "4rem"
        // paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(1)
      }
    },
    icon: {
      color: "white"
    },
    listItemText: {
      [theme.breakpoints.down("xs")]: {
        margin: 0
      }
    },
    starIcon: {
      marginRight: "5%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  technology: {
    title: string;
    icons: Array<{ component: any; additionalProps?: any }>;
    names: Array<{ text: string; starred: boolean }>;
  };
}

const TechnologiesCard = ({
  technology: { title, icons, names },
  classes
}: Props) => (
  <Card className={classes.card}>
    <CardContent
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </CardContent>

    <Grid
      alignItems="center"
      container
      alignSelf="stretch"
      direction="row"
      spacing={1}
      className={classes.iconsContainer}
    >
      {icons.map((i: any, index: number) => (
        <Grid item>
          <div
            style={{
              padding: "1rem"
              // margin: "1%",
              // backgroundColor: ColorLuminance(i.color, 0.99),
              // display: "flex",
              // border: `10px solid ${i.color}`
            }}
          >
            {React.createElement(i.component, {
              key: index,
              style: {
                height: "30px",
                width: "30px"
              },
              // fontSize: "inherit",
              // className: classes.icon,
              ...i.additionalProps
            })}
          </div>
        </Grid>
      ))}
    </Grid>

    <CardContent
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {names.map(po => (
        <Typography variant="h6" style={{ lineHeight: "2.75rem" }}>
          {po.text}
        </Typography>
      ))}
    </CardContent>
  </Card>
);

export default withStyles(styles)(TechnologiesCard);
