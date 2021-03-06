import { Link, navigate } from 'gatsby'
import React from 'react'
import _ from 'lodash'
import AppBar from '@material-ui/core/AppBar'
//Toolbar has issues
// import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import KnitLogo from '../../assets/svg/KnitLogoWhiteBall.svg'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import { hexToRgba, rgbToHex } from '../../utils/hexRgba'
import { Divider, withWidth, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { isWidthDown } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

interface Props extends WithStyles<typeof styles> {
  pages: Array<{ link: string; text: string }>
  location: any
  width: Breakpoint
  theme: any
}

interface State {
  backgroundColor: string
  anchorEl: any
}

class Header extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)

    this.state = {
      backgroundColor: 'transparent',
      anchorEl: null,
    }
  }

  public componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  public componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  private calculateBackgroundColorOpacity = (
    offsetTop: number,
    fadeCoefficient: number,
    currentScrollY: number
  ) => {
    if (currentScrollY <= offsetTop) {
      return 0
    } else {
      return Math.min((currentScrollY - offsetTop) * fadeCoefficient, 1)
    }
  }

  private handleScroll = () => {
    const backgroundColorOpacity = this.calculateBackgroundColorOpacity(
      50,
      0.03,
      window.scrollY
    )
    const rgba = hexToRgba(
      rgbToHex(this.props.theme.palette.primary.dark),
      100 * backgroundColorOpacity
    )
    if (this.state.backgroundColor !== rgba) {
      this.setState({
        backgroundColor: rgba,
      })
    }
  }

  private handleMenu = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  private handleClose = () => {
    this.setState({ anchorEl: null })
  }

  public render() {
    const { classes, pages, location, width } = this.props
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <div
          className={classes.toolbar}
          style={{
            backgroundColor: this.state.backgroundColor,
          }}
        >
          <IconButton component={Link} aria-label="Go home icon" to={'/'}>
            <KnitLogo className={classes.logo} />
          </IconButton>
          {isWidthDown('sm', width) ? (
            <>
              <IconButton
                aria-label="Open menu"
                color="inherit"
                onClick={this.handleMenu}
              >
                <MenuIcon className={classes.icon} />
              </IconButton>
              <Menu
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
                MenuListProps={{ className: classes.menuList }}
              >
                {pages.map((p: any) => {
                  return (
                    <div key={p.text}>
                      <MenuItem
                        onClick={(event: any) => {
                          event.preventDefault()
                          navigate(p.link)
                          this.handleClose()
                        }}
                        className={classes.menuItem}
                      >
                        {p.text}
                      </MenuItem>
                      {location.pathname.includes(p.link.slice(0, -1)) && (
                        <Divider className={classes.underline} />
                      )}
                    </div>
                  )
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.containerRight}>
              {pages.map((p: any) => {
                return (
                  <div key={p.text}>
                    <Button
                      component={Link}
                      classes={{
                        label: classes.buttonLabel,
                      }}
                      size="large"
                      color="inherit"
                      to={p.link}
                      aria-label={p.text}
                      //counter balance the underline so it is still centered
                      style={
                        _.find(pages, (p: any) =>
                          location.pathname.includes(p.link.slice(0, -1))
                        )
                          ? { marginTop: '3px' }
                          : undefined
                      }
                    >
                      {p.text}
                    </Button>
                    {location.pathname.includes(p.link.slice(0, -1)) && (
                      <Divider className={classes.underline} />
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </AppBar>
    )
  }
}
const styles = (theme: any) =>
  createStyles({
    buttonLabel: {
      fontSize: '20px',
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      fontSize: '3em',
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        height: '5rem',
      },
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    appBar: { background: 'transparent', boxShadow: 'none' },
    containerRight: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    underline: {
      height: '3px',
      [theme.breakpoints.up('lg')]: {
        marginLeft: '10%',
        marginRight: '10%',
      },
      borderRadius: '10px',
      backgroundColor: theme.palette.secondary.main,
    },
    menuItem: {
      color: 'white',
      fontWeight: 'bold',
    },
    menuList: {
      backgroundColor: theme.palette.primary.light,
    },
    icon: {
      fontSize: '3rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2.5rem',
      },
      color: 'white',
    },
    logo: {
      width: '3rem',
      height: '3rem',
      [theme.breakpoints.down('xs')]: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
  })

export default withWidth()(withStyles(styles, { withTheme: true })(Header))
