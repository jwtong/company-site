import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme'
import Layout from './Layout'

export function RootLayout(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export function PageLayout(props: any) {
  return <Layout {...props}>{props.children}</Layout>
}
