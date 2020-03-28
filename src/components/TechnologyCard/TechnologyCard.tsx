import {
  Card,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent,
  Divider,
  Theme,
} from '@material-ui/core'
import React from 'react'
import Code from '@material-ui/icons/Code'

interface Props extends WithStyles<typeof styles> {
  technology: {
    title: string
    icon: { component: any; color: string }
    type: string
    description: string
    alternatives: string
    companiesUsing: Array<any>
  }
}

const TechnologyCard: React.FC<Props> = ({
  technology: { title, icon, type, description, alternatives, companiesUsing },
  classes,
}) => (
  <Card className={classes.card}>
    <div className={classes.contentContainer}>
      <div>
        <div className={classes.bannerWrapper}>
          <div className={classes.iconWrapper}>
            {React.createElement(icon.component, {
              className: classes.icon,
            })}
          </div>
        </div>
        <CardContent>
          <Typography className={classes.title}>{title}</Typography>
          <Typography color="secondary" className={classes.type} gutterBottom>
            {type}
          </Typography>
          <div className={classes.descriptionContainer}>
            <div className={classes.descriptionTitleWrapper}>
              <Typography
                variant="subtitle1"
                className={classes.descriptionTitle}
              >
                Why we like it:
              </Typography>
              <Typography variant="subtitle1" className={classes.description}>
                {description}
              </Typography>
            </div>
            <div className={classes.alternativesContainer}>
              <Typography
                variant="subtitle1"
                className={classes.alternativesTitle}
              >
                Suggested Alternatives
              </Typography>
              <div className={classes.codeIconWrapper}>
                <div className={classes.codeIcon}>
                  <Code />
                </div>
              </div>
              <Typography
                variant="subtitle1"
                className={classes.alternativesText}
              >
                {alternatives}
              </Typography>
            </div>
            <Divider className={classes.divider} />
            <div>
              <Typography
                variant="subtitle1"
                className={classes.companiesUsingTitle}
              >
                Companies Using {title}
              </Typography>
              {companiesUsing.map((cu: any) => {
                return React.cloneElement(cu, {
                  className: classes.companySvg,
                })
              })}
            </div>
          </div>
        </CardContent>
      </div>
      <div className={classes.bottomBar} />
    </div>
  </Card>
)

const styles = (theme: Theme) =>
  createStyles({
    card: {
      height: '100%',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    bannerWrapper: {
      padding: '1rem',
      backgroundColor: (props) => props.technology.icon.color,
      display: 'flex',
      justifyContent: 'center',
    },
    iconWrapper: {
      borderRadius: '100rem',
      padding: '1rem',
      backgroundColor: 'white',
      width: '4rem',
      height: '4rem',
    },
    icon: {
      width: '4rem',
      height: '4rem',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
    },
    type: {
      fontSize: '1rem',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    descriptionContainer: {
      marginRight: '.5rem',
      marginLeft: '.5rem',
    },
    descriptionTitleWrapper: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    descriptionTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '1rem',
    },
    alternativesContainer: {
      marginTop: '2rem',
      backgroundColor: '#f9f9f9',
      padding: '.75rem',
      paddingTop: '1.5rem',
      position: 'relative',
    },
    alternativesTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    codeIconWrapper: {
      position: 'absolute',
      display: 'flex',
      top: -15,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    codeIcon: {
      backgroundColor: '#e4e4e4',
      borderRadius: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5px',
    },
    alternativesText: {
      fontSize: '1rem',
      textAlign: 'center',
    },
    divider: {
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
    },
    companiesUsingTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    companySvg: {
      '& path': {
        fill: 'gray',
      },
    },
    bottomBar: {
      height: '1rem',
      backgroundColor: (props: Props) => props.technology.icon.color,
    },
  })

export default withStyles(styles)(TechnologyCard)
