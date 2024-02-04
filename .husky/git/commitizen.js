module.exports = {
    // Add descriptions in Russian for all types
    types: [
        {
            value: 'build',
            name: 'build:     Project build or changes in external dependencies'
        },
        { value: 'ci', name: 'ci:        CI configuration and script work' },
        { value: 'docs', name: 'docs:      Documentation updates' },
        { value: 'feat', name: 'feat:      Adding new features' },
        { value: 'fix', name: 'fix:       Bug fixes' },
        {
            value: 'perf',
            name: 'perf:      Performance improvements'
        },
        {
            value: 'refactor',
            name: 'refactor:  Code refactoring without fixing errors or adding new features'
        },
        { value: 'revert', name: 'revert:    Revert to previous commits' },
        {
            value: 'style',
            name: 'style:     Code style changes (tabs, spaces, periods, commas, etc.)'
        },
        { value: 'test', name: 'test:      Adding tests' }
    ],

    // Scope. It characterizes the code fragment affected by the changes
    scopes: [{ name: 'commitizen' }, { name: 'git' }, { name: 'scripts' }, { name: 'components' }, { name: 'tutorial' }, { name: 'catalog' }, { name: 'product' }],

    // Possibility to set a special SCOPE for a specific commit type (example for 'fix')
    /*
scopeOverrides: {
fix: [
  {name: 'merge'},
  {name: 'style'},
  {name: 'e2eTest'},
  {name: 'unitTest'}
]
},
*/

    // Change default questions
    messages: {
        type: 'What changes are you making?',
        scope: 'Select the SCOPE you changed (optional):',
        // Ask if allowCustomScopes is true
        customScope: 'Specify your SCOPE:',
        subject: 'Write a SHORT description in the IMPERATIVE mood:\n',
        body: 'Write a DETAILED description (optional). Use "|" for a new line:\n',
        breaking: 'List of BREAKING CHANGES (optional):\n',
        footer: 'Place for meta data (tickets, links, etc.). For example: MRKT-700, MRKT-800:\n',
        confirmCommit: 'Are you satisfied with the resulting commit?'
    },

    // Allow a custom SCOPE
    allowCustomScopes: true,

    // Disallow Breaking Changes
    allowBreakingChanges: false,

    // Prefix for the footer
    footerPrefix: 'META DATA:',

    // Limit subject length
    subjectLimit: 72
};
