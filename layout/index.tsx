import { FC, Fragment } from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'

import GlobalStyle from '../styles/globalStyle'
import Navigation from './Navigation/NavigationComponent'
import Footer from './Footer/FooterComponent'

interface LayoutProps { }

const Layout: FC<LayoutProps> = props => {
  const { children } = props

  return (
    <Fragment>
      {HtmlHead}
      <GlobalStyle />
      <Navigation />
      {children}
      <Footer />
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

    {/* Google Fonts */}
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

    <title>ISTA LARACHE - OFPPT</title>
  </Head>
)
