const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {}

module.exports = withPlugins([

  [withPWA, {
    pwa: {
      disable: !prod,
      dest: 'public',
      runtimeCaching,
    },
  }],

  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true',
  }]

], nextConfig)
