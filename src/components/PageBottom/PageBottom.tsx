import {
  withStyles,
  createStyles,
  WithStyles,
  Divider,
  Theme,
} from '@material-ui/core'
import React from 'react'
import { dividerWithMargin } from '../SharedStyles'
import KnitBackground from '../../assets/svg/KnitLightBackground2.svg'

interface Props extends WithStyles<typeof styles> {
  colorTop?: string
}

const PageBottom: React.FC<Props> = ({ children, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.svgContainer}>
        <KnitBackground style={{ backgroundColor: '#f9f9f9' }} />
      </div>
      {children}
    </div>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    container: {
      // width: "100vw",
      // height: "100vh",
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "15px",
      //   height: "600px"
      // },
      // [theme.breakpoints.down("sm")]: {
      //   fontSize: "15px",
      //   height: "500px"
      // },
      // [theme.breakpoints.down("xs")]: {
      //   fontSize: "10px",
      //   height: "330px"
      // },
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
      // position: "relative",
      // overflow: "hidden"

      position: 'relative',
      width: '100vw',
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: "#f9f9f9"
      '-webkit-box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      'box-sizing': 'border-box',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
      },
    },
    svgContainer: {
      position: 'absolute',
      display: 'block',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: -1,
    },
  })

PageBottom.defaultProps = {
  colorTop: 'white',
}

export default withStyles(styles)(PageBottom)
