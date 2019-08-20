import StandardPopover from "../StandardPopover";
import { IconButton, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

const styles = {
  icon: {
    height: "3rem",
    width: "3rem"
  }
};

interface Props extends WithStyles<typeof styles> {
  popoverText: string;
  icon: any;
  link: string;
}

const HoverIconButton = ({ popoverText, icon, link, classes }: Props) => {
  return (
    <StandardPopover popoverText={popoverText}>
      <IconButton aria-label={`Go to ${popoverText}'s website`} href={link}>
        {React.createElement(icon, {
          className: classes.icon
        })}
      </IconButton>
    </StandardPopover>
  );
};

export default withStyles(styles)(HoverIconButton);
