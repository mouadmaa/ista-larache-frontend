const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {}

module.exports = withPlugins([

  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'true',
  }]

], nextConfig)
