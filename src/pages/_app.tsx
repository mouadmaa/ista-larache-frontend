import { Fragment } from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.css'
import Navbar from '../layouts/Navbar/NavbarComponent'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
