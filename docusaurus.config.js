const theme = require('prism-react-renderer/themes/vsDark');

module.exports = {
  title: 'Capter',
  tagline: 'Capter keeps your API running smoothly.',
  url: 'https://capter.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://capter.io/favicon.ico',
  organizationName: 'capterqa',
  projectName: 'cli',
  themeConfig: {
    sidebarCollapsible: false,
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
          href: 'https://github.com/capterqa/cli',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second ',
              to: 'docs/doc2/',
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
