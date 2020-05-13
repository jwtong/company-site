import React from 'react'
import { graphql, Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {
  Typography,
  createStyles,
  withStyles,
  WithStyles,
  Theme,
} from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import Hero from '../components/Hero'
import SubtitleDivider from '../components/SubtitleDivider'
import PageBottom from '../components/PageBottom'
import {
  buttonWithMargin,
  dividerWithMargin,
  offWhiteBackground,
} from '../components/SharedStyles'
import SiteHelmet from '../components/SiteHelmet'
import technologyListItems from '../data/technologyListItems'
import HoverIconButton from '../components/HoverIconButton'

interface Props extends WithStyles<typeof styles> {
  data: any
}

const AboutPage: React.FC<Props> = ({ data, classes }) => {
  const people = [
    {
      name: 'Jeremy Tong',
      avatar: data.jeremyAvatar,
      about: [
        'Jeremy Tong is a graduate of Brown University with dual majors in Computer Science and Economics. His studies focused on UI/UX design, data analytics, behaviorial economics, and finance.',
        "Most recently, Jeremy worked as a Venture for America fellow for Juggle, a startup best described as 'Uber for Babysitting'. He assumed the role of interim CTO, handling all aspects of business related to Juggle's technology and mobile app. During his tenure with Juggle, Jeremy rebuilt the software platform from scratch. The platform serves over 5000 monthly users and generated $200k in revenue in 2018, an 8x increase over 2017, with a projected increase of 2x in 2019.",
        'Through his 4+ years of full-stack experience with web and mobile applications, Jeremy developed a passion for intelligent, data-driven design. Outside of work, Jeremy loves rock climbing, playing jazz piano, and hip-hop dance.',
      ],
      backgroundColor: 'white',
    },
    {
      name: 'Tommy Clark',
      avatar: data.tommyAvatar,
      about: [
        'Tommy is a self taught programmer. He earned a BA in Japanese before spending time teaching English in Japan.',
        'For the past 3 years he’s held a position as CTO and lead software developer for a third party logistics company building cloud-native, reactive, B2B web applications across various tech stacks. Through his experience in tech, Tommy has cultivated a dedication to deploying performant, secure, reliable, scalable software. He also has general business experience in logistics and data analysis.',
        'In his spare time Tommy enjoys rock climbing and board games.',
      ],
      ...offWhiteBackground,
    },
  ]

  return (
    <>
      <SiteHelmet
        description={`About ${data.site.siteMetadata.companyName}`}
        title={'About'}
      />
      <Hero colorBottom={'white'}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
          }}
        >
          <Typography variant="h1" className={classes.header} gutterBottom>
            About Us
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Meet the two founder / software developers of{' '}
            {data.site.siteMetadata.companyName}
          </Typography>
        </div>
      </Hero>
      {people.map((p) => {
        return (
          <div key={p.name}>
            <div
              className={classes.aboutContainer}
              style={{
                backgroundColor: p.backgroundColor,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography className={classes.name} variant="h4">
                  {p.name}
                </Typography>

                <Img
                  fixed={p.avatar.childImageSharp.fixed}
                  alt={p.name}
                  className={classes.avatar}
                />
              </div>
              <SubtitleDivider
                text={'About Me'}
                otherProps={{ className: classes.dividerWithMargin }}
              />
              {p.about.map((paragraph, index) => {
                return (
                  <Typography key={index} variant="subtitle1">
                    {paragraph}
                    {index !== p.about.length - 1 && <br />}
                    {index !== p.about.length - 1 && <br />}
                  </Typography>
                )
              })}
            </div>
          </div>
        )
      })}
      <div id="technology-list" className={classes.technologyList}>
        <SubtitleDivider
          text={"Knit's Technologies"}
          otherProps={{ className: classes.dividerWithMargin }}
        />
        <Grid container spacing={3}>
          {technologyListItems
            .filter((technology) => !technology.excludeFromList)
            .map((technology) => {
              return (
                <Grid
                  key={technology.name}
                  item
                  xs={3}
                  sm={2}
                  md={1}
                  className={classes.hoverIconButtonWrapper}
                >
                  <HoverIconButton
                    popoverText={technology.name}
                    link={technology.link}
                    icon={technology.icon}
                  />
                </Grid>
              )
            })}
        </Grid>
      </div>
      <PageBottom colorTop={people[1].backgroundColor}>
        <Typography variant="h4" className={classes.textAlignCenter}>
          Some examples of previous work
        </Typography>
        <Button
          className={classes.buttonWithMargin}
          component={Link}
          to="/sample-work"
          variant="contained"
          color="secondary"
          aria-label="Sample Work"
        >
          Sample Work
        </Button>
      </PageBottom>
    </>
  )
}
const styles = (theme: Theme) =>
  createStyles({
    header: {
      color: 'white !important',
      textAlign: 'center',
    },
    buttonWithMargin: buttonWithMargin(theme),
    dividerWithMargin: dividerWithMargin(theme),
    aboutContainer: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      alignItems: 'stretch',
    },
    avatar: {
      borderRadius: '100px',
      marginTop: theme.spacing(4),
    },
    technologyList: {
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
      paddingBottom: theme.spacing(6),
      paddingTop: '70px',
      marginTop: '-70px',
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
    name: {
      fontFamily: 'Open Sans',
      fontWeight: 800,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.75rem',
      },
    },
    hoverIconButtonWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textAlignCenter: {
      textAlign: 'center',
    },
  })

export const query = graphql`
  query {
    jeremyAvatar: file(relativePath: { eq: "images/jeremy_profile.jpeg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tommyAvatar: file(relativePath: { eq: "images/favicon.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        companyName
      }
    }
  }
`

export default withStyles(styles)(AboutPage)
