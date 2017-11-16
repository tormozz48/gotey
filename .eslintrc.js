module.exports = {
    extends: 'gemini-testing',
    root: true,
    plugins: [
        'react'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-no-undef': [2, { allowGlobals: true }]
    }
};
