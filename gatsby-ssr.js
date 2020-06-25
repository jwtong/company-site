import React from 'react'
import { RootLayout } from './src/components/LayoutProvider.tsx'

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}
