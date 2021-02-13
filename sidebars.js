module.exports = {
  docs: [
    {
      type: 'category',
      label: 'CLI',
      collapsed: false,
      items: [
        'docs-index',
        {
          Guide: [
            'cli/guide/cli-installation',
            'cli/guide/cli-getting-started',
            'cli/guide/cli-composing-requests',
            'cli/guide/cli-assertions',
            'cli/guide/cli-handling-errors',
          ],
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
