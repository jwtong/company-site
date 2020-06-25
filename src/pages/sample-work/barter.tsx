import React from 'react'
import _ from 'lodash'
import { graphql } from 'gatsby'
import {
  Divider,
  withStyles,
  createStyles,
  WithStyles,
  Theme,
} from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import SampleWorkTemplate from '../../components/SampleWorkTemplate'
import services from '../../data/services'
import {
  dividerWithMargin,
  imagesContainer,
} from '../../components/SharedStyles'

interface Props extends WithStyles<typeof styles> {
  data: any
}

class BarterPage extends React.Component<Props> {
  public render() {
    const { classes, data } = this.props

    const barterRoles = services.filter((role) =>
      ['Software Development', 'UI/UX Design'].includes(role.title)
    )
    const barterTechnologies = ['Sketch']
    const images = data.images.edges.map((e: { node: any }) => e.node)

    return (
      <SampleWorkTemplate
        title={'Barter'}
        subtitle={
          'An app concept inspired by Tinder, Snapchat, and Instagram that utilizes social discovery to match individuals who want to exchange goods.'
        }
        roles={barterRoles}
        technologies={barterTechnologies}
      >
        <Divider variant="middle" className={classes.dividerWithMargin} />

        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter1')
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter2')
                .childImageSharp.fluid
            }
          />
        </div>
        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter3')
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter4')
                .childImageSharp.fluid
            }
          />
        </div>
        <div className={classes.imagesContainer}>
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter5')
                .childImageSharp.fluid
            }
          />
          <Img
            className={classes.image}
            fluid={
              _.find(images, (d: { name: string }) => d.name === 'barter6')
                .childImageSharp.fluid
            }
          />
        </div>
        <Divider variant="middle" className={classes.dividerWithMargin} />
      </SampleWorkTemplate>
    )
  }
}

const styles = (theme: Theme) =>
  createStyles({
    image: {
      width: '40%',
      [theme.breakpoints.down('md')]: {
        width: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    imagesContainer: imagesContainer(theme),
    dividerWithMargin: dividerWithMargin(theme),
  })

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "sample_work/barter" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default withStyles(styles, { withTheme: true })(BarterPage)
