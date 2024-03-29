module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // agrega las reglas de prettier a eslint
        'plugin:prettier/recommended', // agregar el plugin que integra eslint con prettier
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        // Aca puedes modificar alguna regla específica, por ejemplo:
        // "@typescript-eslint/explicit-function-return-type": "off",
    },
};
