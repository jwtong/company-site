import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { WithStyles } from '@material-ui/core/styles/withStyles'

interface Props extends WithStyles<typeof styles> {
  typographyProps?: any
  popoverText: string
}

class StandardPopover extends React.Component<Props> {
  state = {
    anchorEl: null,
  }

  handleStandardPopoverOpen = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleStandardPopoverClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, children, popoverText, typographyProps } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
        <div
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handleStandardPopoverOpen}
          onMouseLeave={this.handleStandardPopoverClose}
          style={{ display: 'flex' }}
        >
          {children}
        </div>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={this.handleStandardPopoverClose}
          disableRestoreFocus
        >
          <Typography className={classes.popoverText} {...typographyProps}>
            {popoverText}
          </Typography>
        </Popover>
      </div>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
    popoverText: {
      fontFamily: 'Open Sans',
    },
  })

export default withStyles(styles)(StandardPopover)
