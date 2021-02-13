const theme = require('prism-react-renderer/themes/vsDark');

module.exports = {
  title: 'Capter',
  tagline: 'Capter keeps your API running smoothly.',
  url: 'https://capter.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://capter.io/favicon.ico',
  organizationName: 'capterqa',
  projectName: 'cli',
  themeConfig: {
    prism: {
      theme: {
        ...theme,
        plain: {
          backgroundColor: '#161B22',
          color: '#E0E0E0',
        },
        styles: [
          ...theme.styles,
          {
            types: ['atrule'],
            style: {
              color: '#9FA8DA',
            },
          },
          {
            types: ['comment'],
            style: {
              color: '#75798a',
            },
          },
          {
            types: ['tag'],
            style: {
              color: '#f283c8',
            },
          },
          {
            types: ['punctuation'],
            style: {
              color: '#E0E0E0',
            },
          },
        ],
      },
    },
    navbar: {
      title: 'Capter docs',
      logo: {
        alt: 'Capter',
        src: 'https://capter.io/logos/icon-gray.svg',
        srcDark: 'https://capter.io/logos/icon-white.svg',
      },
      items: [
        {
          to: '/cli/guide/installation',
          label: 'Guide',
          position: 'left',
        },
        {
          to: '/cli/reference/workflow',
          label: 'Workflow reference',
          position: 'right',
        },
        {
          to: '/cli/reference/assertions',
          label: 'Assertions reference',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              to: '/',
              label: 'About',
            },
            {
              to: '/cli/guide/installation',
              label: 'Installation',
            },
            {
              to: '/cli/guide/installation',
              label: 'Getting started',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              to: '/cli/reference/cli',
              label: 'CLI',
            },
            {
              to: '/cli/reference/workflow',
              label: 'Workflow',
            },
            {
              to: '/cli/reference/assertions',
              label: 'Assertions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/capterqa',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/capterqa/cli',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} capter.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
