import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Typography, WithStyles, Theme, createStyles } from '@material-ui/core'
import Hero from '../components/Hero'
import SubtitleDivider from '../components/SubtitleDivider'
import TransitionOnShow from '../components/TransitionOnShow'
import PageBottom from '../components/PageBottom'
import SplashPage from '../components/SplashPage'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import { buttonWithMargin } from '../components/SharedStyles'
import { graphql, Link } from 'gatsby'
import SiteHelmet from '../components/SiteHelmet'
import services from '../data/services'
import ServiceCard from '../components/ServiceCard'
import techStack from '../data/techStack'
import TechnologyCard from '../components/TechnologyCard'

interface Props {
  data: any
  width: any
}

const IndexPage: React.FC<Props & WithStyles<typeof styles>> = ({
  classes,
  width,
  data,
  theme,
}) => {
  return (
    <>
      <SiteHelmet
        description={
          'Web and mobile application development for startups and small businesses.'
        }
        title={'Software Development and Consulting'}
      />
      <Hero showAnimation colorBottom={'white'}>
        <Typography variant="h1" className={classes.header} gutterBottom>
          {data.site.siteMetadata.companyName}
        </Typography>
        <Typography variant="h4" className={classes.header}>
          code as craft
        </Typography>
      </Hero>
      <SplashPage>
        <div className={classes.bottomContainer}>
          <Typography variant="h4" className={classes.textAlignCenter}>
            {data.site.siteMetadata.companyName} is a software development
            consultancy providing startups and small businesses high quality
            code through friendly, approachable means.
          </Typography>
        </div>
      </SplashPage>
      <div className={classes.technologiesContainer}>
        <SubtitleDivider
          text="Our Services"
          containerStyle={{
            width: '100%',
          }}
          otherProps={{ className: classes.subtitleDivider }}
        />
        <div className={classes.gridWrapper}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            {services.map((service, index) => {
              return (
                <Grid key={service.title} item xs={12} sm={6} lg={3}>
                  <TransitionOnShow
                    visibilitySensorProps={{ partialVisibility: true }}
                    transitionType="Zoom"
                    delay={isWidthDown('sm', width) ? 0 : (index % 3) * 200}
                    transitionProps={{
                      timeout: { enter: 1000 },
                      className: classes.transition,
                    }}
                    containerStyle={{
                      height: '100%',
                    }}
                  >
                    <div>
                      <ServiceCard
                        {...service}
                        color={
                          index === 0
                            ? theme.palette.secondary.light
                            : service.color
                        }
                      />
                    </div>
                  </TransitionOnShow>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
      <div className={classes.technologiesContainer}>
        <SubtitleDivider
          text="Our Recommended Tech Stack"
          containerStyle={{
            width: '100%',
          }}
          otherProps={{ className: classes.subtitleDivider }}
        />
        <div className={classes.gridWrapper}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            {techStack.map((tech) => {
              return (
                <Grid key={tech.category} item xs={12} sm={6} lg={4}>
                  <div>
                    <TechnologyCard {...tech} />
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/about#technology-list"
          variant="contained"
          color="secondary"
          aria-label="Other Technologies"
          state={{ scrollToTechnologies: true }}
        >
          Full Technology List
        </Button>
      </div>
      <PageBottom>
        <Typography variant="h4" className={classes.textAlignCenter}>
          Contact us to discuss your project and how we can collaborate.
        </Typography>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/contact"
          variant="contained"
          color="secondary"
          aria-label="Contact Us"
        >
          Contact Us
        </Button>
      </PageBottom>
    </>
  )
}

const styles = (theme: Theme) =>
  createStyles({
    subtitleDivider: {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1),
      },
    },
    buttonWithMargin: buttonWithMargin(theme),
    technologiesContainer: {
      width: '100%',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      '-webkit-box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      'box-sizing': 'border-box',
    },
    gridWrapper: {
      width: '100%',
      display: 'flex',
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(5),
      // marginBottom: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2),
        // marginBottom: theme.spacing(2)
      },
    },
    header: {
      color: 'white !important',
      textAlign: 'center',
    },
    header2: {
      color: 'white !important',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2.5em',
      },
    },
    subHeader2: {
      color: 'white !important',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.75em',
      },
    },
    bottomContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    transition: {
      height: '100%',
    },
    companySvg: {
      '& path': {
        fill: 'gray',
      },
    },
    textAlignCenter: {
      textAlign: 'center',
    },
  })

export const query = graphql`
  query {
    site {
      siteMetadata {
        companyName
      }
    }
  }
`

export default withWidth()(withStyles(styles, { withTheme: true })(IndexPage))
