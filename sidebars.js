module.exports = {
  docs: [
    {
      type: 'category',
      label: 'CLI',
      collapsed: false,
      items: [
        'docs-index',
        {
          'Getting started': [
            'cli/getting-started/cli-installation',
            'cli/getting-started/cli-workflows',
            'cli/getting-started/cli-composing-requests',
            'cli/getting-started/cli-assertions',
            'cli/getting-started/cli-handling-errors',
          ],
          Guides: ['cli/guides/guides-environment-variables'],
          Reference: [
            'cli/reference/cli-reference',
            'cli/reference/workflow-reference',
            'cli/reference/assertions-reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Web',
      collapsed: false,
      items: [
        'web/web-index',
        {
          Alerts: ['web/alerts/web-alerts-slack'],
        },
      ],
    },
  ],
};
