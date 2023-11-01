const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })

    return config
  },
  async redirects() {
    return [
      {
        source: '/acerca',
        destination: '/',
        permanent: true,
      },
      {
        source: '/proyectos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:categ/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tags/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed.xml',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs/versions',
        destination: 'https://bootstrap.esdocu.com/docs/versions',
        permanent: true,
      },
      {
        source: '/docs/5.1/:one',
        destination: 'https://bootstrap.esdocu.com/docs/5.1/:one',
        permanent: true,
      },
      {
        source: '/docs/5.1/:one/:two',
        destination: 'https://bootstrap.esdocu.com/docs/5.1/:one/:two',
        permanent: true,
      },
      {
        source: '/docs/5.1/:one/:two/:three',
        destination: 'https://bootstrap.esdocu.com/docs/5.1/:one/:two/:three',
        permanent: true,
      },
      {
        source: '/conceptos/:one',
        destination: 'https://esdocu.com/conceptos/:one',
        permanent: true,
      },
      {
        source: '/conceptos/:one/:two',
        destination: 'https://esdocu.dev/conceptos/:one/:two',
        permanent: true,
      },
      {
        source: '/conceptos/:one/:two/:three',
        destination: 'https://esdocu.dev/conceptos/:one/:two/:three',
        permanent: true,
      },
      {
        source: '/javascript/:one',
        destination: 'https://esdocu.com/javascript/:one',
        permanent: true,
      },
      {
        source: '/javascript/:one/:two',
        destination: 'https://esdocu.dev/javascript/:one/:two',
        permanent: true,
      },
      {
        source: '/javascript/:one/:two/:three',
        destination: 'https://esdocu.dev/javascript/:one/:two/:three',
        permanent: true,
      },
      {
        source: '/python/:one',
        destination: 'https://esdocu.com/python/:one',
        permanent: true,
      },
      {
        source: '/python/:one/:two',
        destination: 'https://esdocu.dev/python/:one/:two',
        permanent: true,
      },
      {
        source: '/python/:one/:two/:three',
        destination: 'https://esdocu.dev/python/:one/:two/:three',
        permanent: true,
      },
      {
        source: '/python/iniciando',
        destination: '/python/conceptos',
        permanent: true,
      },
      {
        source: '/python/iniciando/:slug',
        destination: '/python/conceptos',
        permanent: true,
      },
      {
        source: '/javascript',
        destination: '/',
        permanent: true,
      },
      {
        source: '/javascript/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/javascript/:topic/:slug',
        destination: '/',
        permanent: true,
      },
    ];
  },
})
