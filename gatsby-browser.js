import React from 'react'
import { RootLayout, PageLayout } from './src/components/LayoutProvider.tsx'

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageLayout {...props}>{element}</PageLayout>
}
