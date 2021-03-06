import {
  withStyles,
  createStyles,
  WithStyles,
  Typography,
  Grid,
  Theme,
} from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import Hero from '../Hero'
import ServicePopovers from '../ServicePopovers'
import technologyListItems from '../../data/technologyListItems'
import SubtitleDivider from '../SubtitleDivider'
import { dividerWithMargin } from '../SharedStyles'
import SiteHelmet from '../SiteHelmet'
import HoverIconButton from '../HoverIconButton'

interface Props {
  title: string
  subtitle: string
  roles: Array<{ title: string; icon: any }>
  technologies: Array<string>
}

const SampleWorkTemplate: React.FC<Props & WithStyles<typeof styles>> = ({
  children,
  title,
  subtitle,
  roles,
  technologies,
  classes,
}) => {
  return (
    <>
      <SiteHelmet description={`Sample work - ${title}`} title={title} />
      <Hero colorBottom={'white'}>
        <Typography
          variant="h1"
          className={clsx(classes.header, classes.title)}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h4" className={classes.header}>
          {subtitle}
        </Typography>
      </Hero>
      <div className={classes.mainContentContainer}>
        {children}
        <SubtitleDivider
          text={'Services Provided'}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <ServicePopovers roles={roles} />
        <SubtitleDivider
          text={'Technologies'}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Grid
          className={classes.skillsGrid}
          justify="center"
          container
          spacing={1}
        >
          {technologies.map((t) => {
            const tech = technologyListItems.find(({ name }) => name === t)
            return (
              tech && (
                <Grid
                  key={t}
                  item
                  className={classes.hoverIconButtonWrapper}
                  xs={3}
                  sm={2}
                  md={1}
                >
                  {tech && (
                    <HoverIconButton
                      popoverText={t}
                      link={tech.link}
                      icon={tech.icon}
                    />
                  )}
                </Grid>
              )
            )
          })}
        </Grid>
      </div>
    </>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    header: {
      color: 'white !important',
      textAlign: 'center',
    },
    title: {
      fontSize: (props: Props) => (props.title.length > 20 ? '5rem' : ''),
      [theme.breakpoints.down('xs')]: {
        fontSize: (props: Props) =>
          props.title.length > 20 ? '2.5rem' : '3.5rem',
      },
    },
    mainContentContainer: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      alignItems: 'stretch',
      marginBottom: '3%',
    },
    skillsGrid: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        marginBottom: theme.spacing(3),
      },
    },
    dividerWithMargin: dividerWithMargin(theme),
    hoverIconButtonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })

export default withStyles(styles)(SampleWorkTemplate)
