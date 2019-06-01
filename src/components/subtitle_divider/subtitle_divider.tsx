import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/styles";

const styles = createStyles({
  text: { textAlign: "left", textTransform: "uppercase" },
  divider: {
    height: "2px",
    backgroundColor: "#919191"
  }
});

interface Props extends WithStyles<typeof styles> {
  text: string;
  containerStyle?: CSSProperties;
}

const SubtitleDivider = ({ classes, text, containerStyle }: Props) => {
  return (
    <div style={containerStyle}>
      <Typography variant="h5" gutterBottom className={classes.text}>
        {text}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
};

export default withStyles(styles)(SubtitleDivider);
