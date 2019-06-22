import {
  Card,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";

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
      backgroundColor: theme.palette.secondary.light,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      fontSize: "6em",
      [theme.breakpoints.down("xs")]: {
        fontSize: "4rem",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
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
    <div className={classes.iconsContainer}>
      {icons.map((i: any, index: number) =>
        React.createElement(i.component, {
          key: index,
          fontSize: "inherit",
          className: classes.icon,
          ...i.additionalProps
        })
      )}
    </div>
    <CardContent>
      <Typography variant="h4">{title}</Typography>
      <List>
        {names.map(poText => {
          return (
            <ListItem key={poText.text}>
              {poText.starred && (
                <StarIcon color="secondary" className={classes.starIcon} />
              )}
              <ListItemText
                primaryTypographyProps={{
                  variant: "h6"
                }}
                primary={poText.text}
              />
            </ListItem>
          );
        })}
      </List>
    </CardContent>
  </Card>
);

export default withStyles(styles)(TechnologiesCard);
