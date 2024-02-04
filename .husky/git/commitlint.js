// File created based on @commitlint/config-conventional

const cz = require('./commitizen.js');

module.exports = {
    rules: {
        // Commit body must start with a blank line
        'body-leading-blank': [2, 'always'],

        // Commit footer must start with a blank line
        'footer-leading-blank': [2, 'always'],

        // Maximum header length is 72 characters
        'header-max-length': [2, 'always', cz.subjectLimit],

        // Scope should always be in lowercase
        'scope-case': [2, 'always', 'lower-case'],

        // Enumerate all possible commit scopes
        'scope-enum': [1, 'always', cz.scopes.map((type) => type.name)],

        // Description cannot be empty
        'subject-empty': [2, 'never'],

        // Description should not end with '.'
        'subject-full-stop': [2, 'never', '.'],

        // Type should always be in lowercase
        'type-case': [2, 'always', 'lower-case'],

        // Type cannot be empty
        'type-empty': [2, 'never'],

        // Enumerate all possible commit types
        'type-enum': [2, 'always', cz.types.map((type) => type.value)]
    }
};
