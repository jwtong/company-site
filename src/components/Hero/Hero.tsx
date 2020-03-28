import { withStyles, createStyles, WithStyles, Theme } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import KnitBackground from '../../assets/svg/KnitDarkBackground.svg'
import { pageContainer } from '../SharedStyles'

const generateSvgStyle = (strokeDashoffsets: Array<number>, speed: number) => {
  const generatedStyle: any = { svgAnimate: {} }

  for (let i = 0; i < strokeDashoffsets.length; i++) {
    const animation = {
      from: { strokeDashoffset: strokeDashoffsets[i] },
      to: { strokeDashoffset: '0' },
    }
    const lineStyle = {
      strokeDasharray: strokeDashoffsets[i].toString(),
      strokeDashoffset: strokeDashoffsets[i].toString(),
      animation: `$anim${i + 1} 1s forwards`,
      animationDuration: `${speed}s`,
      animationDelay: `${i * speed}s`,
    }
    generatedStyle.svgAnimate[`& line:nth-of-type(${i + 1})`] = lineStyle
    generatedStyle[`@keyframes anim${i + 1}`] = animation
  }

  return generatedStyle
}

interface Props extends WithStyles<typeof styles> {
  colorBottom: string
  showAnimation?: boolean
}

const Hero: React.FC<Props> = ({ children, classes, showAnimation }) => {
  return (
    <div className={clsx(classes.container, classes.pageContainer)}>
      <div className={classes.svgContainer}>
        <KnitBackground
          className={showAnimation ? classes.svgAnimate : ''}
          preserveAspectRatio="none"
          height="100%"
          width="100%"
        />
        ;
      </div>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    contentContainer: {
      position: 'relative',
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
      },
    },
    pageContainer: pageContainer(theme),
    container: {
      backgroundColor: 'black',
    },
    svgContainer: {
      position: 'absolute',
      display: 'block',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // [theme.breakpoints.down("xs")]: {
      //   width: "150%",
      //   height: "150%",
      //   overflow: "hidden"
      // },
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // zIndex: -1
    },
    ...generateSvgStyle([2228, 2357, 1487, 1900, 1390], 0.3),
  })

export default withStyles(styles)(Hero)
