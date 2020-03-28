import {
  Card,
  Typography,
  withStyles,
  createStyles,
  WithStyles,
  CardContent,
} from '@material-ui/core'
import React from 'react'
import { Role } from '../../utils/interfaces'

interface Props extends WithStyles<typeof styles> {
  role: Role
  color: string
}

const ServiceCard: React.FC<Props> = ({
  role: { title, icon, text },
  classes,
}) => (
  <Card className={classes.card}>
    <div className={classes.contentContainer}>
      <div>
        <div className={classes.bannerWrapper}>
          <div className={classes.iconWrapper}>
            {React.createElement(icon, {
              className: classes.icon,
            })}
          </div>
        </div>
        <CardContent>
          <Typography noWrap className={classes.title}>
            {title}
          </Typography>
          <div className={classes.text}>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: '1rem',
              }}
            >
              {text}
            </Typography>
          </div>
        </CardContent>
      </div>
      <div className={classes.bottomBar} />
    </div>
  </Card>
)

const styles = () =>
  createStyles({
    card: { height: '100%' },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    bannerWrapper: {
      padding: '1rem',
      backgroundColor: (props: Props) => props.color,
      display: 'flex',
      justifyContent: 'center',
    },
    iconWrapper: {
      borderRadius: '100rem',
      padding: '1rem',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: '3rem',
      height: '3rem',
      color: (props: Props) => props.color,
    },
    title: {
      textAlign: 'center',
      fontSize: '1.5rem',
    },
    text: {
      marginRight: '.5rem',
      marginLeft: '.5rem',
      marginTop: '.5rem',
    },
    bottomBar: {
      height: '1rem',
      backgroundColor: (props: Props) => props.color,
    },
  })

export default withStyles(styles)(ServiceCard)
