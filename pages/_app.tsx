import { Fragment } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import Layout from '../layout'
import theme from '../styles/theme'
import { useApollo } from '../apollo/apolloClient'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp


