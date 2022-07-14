module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],

    rules: {
        indent: ['error', 4],
        'max-len': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.js', '.vue'],
            },
        },
    },
};
