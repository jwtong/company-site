import React from 'react'
import { Typography, IconButton, Button } from '@material-ui/core'
import {
  withStyles,
  createStyles,
  WithStyles,
  Theme,
} from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail'
import { Linkedin, Github } from 'mdi-material-ui'

interface Props extends WithStyles<typeof styles> {
  mainText: string
  email?: string
  linkedIn?: string
  githubSource?: string
}

const Footer: React.FC<Props> = ({
  classes,
  mainText,
  email,
  linkedIn,
  githubSource,
}) => {
  return (
    <footer>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <Typography variant="h6" className={classes.mainText}>
            {mainText}
          </Typography>
          <Button
            // color="secondary"
            variant="contained"
            aria-label="Website Source"
            className={classes.button}
            href={githubSource}
          >
            <Github className={classes.githubIcon} />
            View Source
          </Button>
        </div>
        <div className={classes.right}>
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

const styles = (theme: Theme) =>
  createStyles({
    mainText: {
      color: 'white !important',
      fontFamily: 'Ubuntu',
      fontSize: '1rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '.65rem',
      },
    },
    button: {
      fontSize: '.75rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '.4rem',
      },
      marginLeft: theme.spacing(2),
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: { display: 'flex', justifyContent: 'flex-end' },
    container: {
      height: '8vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0% 5% 0% 5%',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]: {
        height: '75px',
      },
      [theme.breakpoints.down('xs')]: {
        height: '50.5px',
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
        fontSize: '1rem',
      },
    },
  })

export default withStyles(styles)(Footer)
