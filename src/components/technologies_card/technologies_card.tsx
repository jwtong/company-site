import {
  Card,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent,
  ListItem,
  ListItemIcon,
  List,
  ListItemText
} from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";

const styles = (theme: any) =>
  createStyles({
    card: {
      backgroundColor: "white"
    },
    iconWrapper: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: theme.palette.secondary.light,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      fontSize: "6em"
    },
    icon: {
      color: "white"
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
    <div className={classes.iconWrapper}>
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
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
              )}
              <ListItemText
                primaryTypographyProps={{ variant: "h6" }}
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
