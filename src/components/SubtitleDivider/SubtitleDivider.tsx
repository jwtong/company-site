import React from 'react'
import { Typography, Divider } from '@material-ui/core'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import { CSSProperties } from '@material-ui/styles'

interface Props extends WithStyles<typeof styles> {
  text: string
  containerStyle?: CSSProperties
  otherProps?: any
}

const SubtitleDivider: React.FC<Props> = ({
  classes,
  text,
  containerStyle,
  otherProps,
}) => {
  return (
    <div style={containerStyle} {...otherProps}>
      <Typography variant="h5" gutterBottom className={classes.text}>
        {text}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  )
}

const styles = createStyles({
  text: {
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  divider: {
    height: '2px',
    backgroundColor: '#919191',
  },
})

export default withStyles(styles)(SubtitleDivider)
