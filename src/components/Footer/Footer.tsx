import React from 'react'
import { Typography, IconButton, Button, withWidth } from '@material-ui/core'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import { Linkedin, Github } from 'mdi-material-ui'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { isWidthUp } from '@material-ui/core/withWidth'

interface Props extends WithStyles<typeof styles> {
  mainText: string
  email?: string
  linkedIn?: string
  githubSource?: string
  width: Breakpoint
}

const Footer: React.FC<Props> = ({
  classes,
  mainText,
  email,
  linkedIn,
  githubSource,
  width,
}: Props) => {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <Typography variant="h6" className={classes.mainText}>
            {mainText}
          </Typography>
          {isWidthUp('md', width) && githubSource && (
            <Button
              // color="secondary"
              variant="contained"
              aria-label="Website Source"
              className={classes.button}
              href={githubSource}
            >
              <Github className={classes.githubIcon} />
              view source
            </Button>
          )}
        </div>
        <div className={classes.right}>
          {!isWidthUp('md', width) && githubSource && (
            <IconButton
              aria-label="Website Source"
              className={classes.icon}
              href={githubSource}
            >
              <Github fontSize="inherit" />
            </IconButton>
          )}
          {email && (
            <IconButton
              aria-label="Link to email"
              className={classes.icon}
              href={`mailto:${email}`}
            >
              <MailIcon fontSize="inherit" />
            </IconButton>
          )}
          {linkedIn && (
            <IconButton
              aria-label="Link to LinkedIn"
              className={classes.icon}
              href={linkedIn}
            >
              <Linkedin fontSize="inherit" />
            </IconButton>
          )}
        </div>
      </div>
    </footer>
  )
}

const styles = (theme: any) =>
  createStyles({
    mainText: {
      color: 'white !important',
      fontFamily: 'Ubuntu',
      fontSize: '1rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '.65rem',
      },
    },

    leftContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: theme.spacing(7),
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(1),
      },
    },
    button: {
      fontSize: '.75rem',
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: '.4rem',
        marginLeft: theme.spacing(0),
      },
    },
    icon: {
      fontSize: '2rem',
      color: 'white',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    githubIcon: {
      marginRight: theme.spacing(0.5),
      fontSize: '1.25rem',
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
  })

export default withWidth()(withStyles(styles)(Footer))
