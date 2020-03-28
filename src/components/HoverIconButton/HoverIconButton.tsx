import StandardPopover from '../StandardPopover'
import { IconButton, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'

interface Props extends WithStyles<typeof styles> {
  popoverText: string
  icon: any
  link: string
}

const HoverIconButton: React.FC<Props> = ({
  popoverText,
  icon,
  link,
  classes,
}) => {
  return (
    <StandardPopover popoverText={popoverText}>
      <IconButton aria-label={`Go to ${popoverText}'s website`} href={link}>
        {React.createElement(icon, {
          className: classes.icon,
        })}
      </IconButton>
    </StandardPopover>
  )
}

const styles = {
  icon: {
    height: '3rem',
    width: '3rem',
  },
}

export default withStyles(styles)(HoverIconButton)
