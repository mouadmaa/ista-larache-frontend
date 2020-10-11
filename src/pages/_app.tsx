import { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import Navbar from '../layouts/Navbar/NavbarComponent'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      {HtmlHead}
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp

const HtmlHead = (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

    <meta name="description" content="Institut Specialise De Technologie Appliquee Larache - OFPPT Larache" />
    <meta name="keywords" content="ista ofppt larache" />
  </Head>
)
