import { Fragment } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '../layout'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp


