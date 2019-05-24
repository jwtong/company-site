import React from "react";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  StandardPopover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
});

class StandardPopover extends React.Component {
  state = {
    anchorEl: null
  };

  handleStandardPopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleStandardPopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, children, popoverText } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <div
          aria-owns={open ? "mouse-over-StandardPopover" : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handleStandardPopoverOpen}
          onMouseLeave={this.handleStandardPopoverClose}
          style={{ display: "flex" }}
        >
          {children}
        </div>
        <Popover
          id="mouse-over-StandardPopover"
          className={classes.StandardPopover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          onClose={this.handleStandardPopoverClose}
          disableRestoreFocus
        >
          <Typography>{popoverText}</Typography>
        </Popover>
      </div>
    );
  }
}

StandardPopover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StandardPopover);
