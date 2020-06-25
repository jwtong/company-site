import React from 'react'
import {
  Typography,
  createStyles,
  withStyles,
  Slide,
  WithStyles,
  Snackbar,
  SnackbarContent,
  Theme,
} from '@material-ui/core'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import SiteHelmet from '../components/SiteHelmet'
import SubtitleDivider from '../components/SubtitleDivider'

interface Props extends WithStyles<typeof styles> {
  data: any
}

interface State {
  openSuccess: boolean
  openFailure: boolean
  nameError: string | null
}

class ContactPage extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      openSuccess: false,
      openFailure: false,
      nameError: null,
    }
  }

  private getSnackbar = (children: any, open: string, otherProps?: any) => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={() => {
          this.setState({ [open]: false })
        }}
        open={this.state[open]}
        TransitionComponent={Slide}
        TransitionProps={{
          direction: 'up',
        }}
        {...otherProps}
      >
        {children}
      </Snackbar>
    )
  }
  private renderSnackbars = () => {
    const { classes } = this.props
    return (
      <>
        {this.getSnackbar(
          <SnackbarContent
            className={classes.snackbar}
            message="Thanks for reaching out! We've recieved your inquiry and will contact you soon."
          />,
          'openSuccess',
          {
            variant: 'success',
          }
        )}
        {this.getSnackbar(
          <SnackbarContent
            className={clsx(classes.snackbar, classes.errorSnackbar)}
            message="Sorry, there was an error submitting the form. You can also reach us by email at team@knit.dev"
          />,
          'openFailure',
          {
            variant: 'failure',
          }
        )}
      </>
    )
  }

  public render() {
    const { classes, data } = this.props
    return (
      <>
        <SiteHelmet
          description={`Contact ${data.site.siteMetadata.companyName}`}
          title={'Contact'}
        />
        <Hero colorBottom={'white'}>
          <Typography variant="h1" className={classes.header} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h4" className={classes.header}>
            Fill out the form below, and we&apos;ll get back to you within 2
            days
          </Typography>
        </Hero>
        <div className={classes.mainContainer}>
          <SubtitleDivider text={'Contact Form'} />
          <ContactForm
            successCallback={() => {
              this.setState({ openSuccess: true })
            }}
            failureCallback={() => {
              this.setState({ openFailure: true })
            }}
            formEndpoint={data.site.siteMetadata.contactFormEndpoint}
          />
          {this.renderSnackbars()}
        </div>
      </>
    )
  }
}
const styles = (theme: any) =>
  createStyles({
    header: {
      color: 'white !important',
      textAlign: 'center',
    },
    mainContainer: {
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
      alignItems: 'stretch',
      justifyContent: 'center',
      alignSelf: 'center',
      '-webkit-box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      'box-sizing': 'border-box',
    },
    snackbar: {
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '10%',
      width: '70%',
      padding: '2%',
    },
    errorSnackbar: {
      backgroundColor: theme.palette.secondary.main,
    },
  })

export const query = graphql`
  query {
    site {
      siteMetadata {
        companyName
        contactFormEndpoint
        projectFormEndpoint
      }
    }
  }
`

export default withStyles(styles)(ContactPage)
