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
        source: '/blog/page/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tags/:slug',
        destination: '/',
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

    ];
  },
})
