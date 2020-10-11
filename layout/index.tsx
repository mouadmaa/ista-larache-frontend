import { FC, Fragment } from 'react'
import Head from 'next/head'

import GlobalStyle from '../styles/globalStyle'
import Navbar from './Navbar/NavbarComponent'

interface LayoutProps { }

const Layout: FC<LayoutProps> = props => {
  const { children } = props

  return (
    <Fragment>
      {HtmlHead}
      <GlobalStyle />
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout

const HtmlHead = (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

    <meta name="description" content="Institut Specialise De Technologie Appliquee Larache - OFPPT Larache" />
    <meta name="keywords" content="ista ofppt larache" />

    <title>ISTA LARACHE - OFPPT</title>
  </Head>
)
