import React, { FC, Fragment } from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/globalStyle'
import Navbar from './Navbar/NavbarComponent'

interface LayoutProps {
  title?: string
  isMain?: boolean
}

const Layout: FC<LayoutProps> = props => {
  const { children, title = 'ISTA LARACHE - OFPPT', isMain = false } = props

  return (
    <Fragment>
      {HtmlHead(title)}
      <GlobalStyle />
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout

const HtmlHead = (title: string) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

    <meta name="description" content="Institut Specialise De Technologie Appliquee Larache - OFPPT Larache" />
    <meta name="keywords" content="ista ofppt larache" />

    <title>{title}</title>
  </Head>
)
