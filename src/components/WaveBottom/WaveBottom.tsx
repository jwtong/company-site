import { withStyles, createStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import WaveBottomSVG from '../../assets/svg/wave.svg'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

interface Props extends WithStyles<typeof styles> {
  colorTop?: string
  colorBottom?: string
  flip?: boolean
  width: Breakpoint
}

const WaveBottom = ({ classes }: Props) => {
  return <WaveBottomSVG className={classes.svg} />
}

WaveBottom.defaultProps = {
  colorTop: 'white',
  colorBottom: null,
  flip: false,
}

const styles = createStyles({
  svg: {
    '& path': {
      fill: (props: Props) => props.colorTop,
    },
    backgroundColor: (props: Props) => props.colorBottom,
    display: 'block',
    transform: 'rotate(180deg) scaleX(-1)',
  },
})

export default withStyles(styles)(WaveBottom)
