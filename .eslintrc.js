module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:i18next/recommended',
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: 'no-type-imports' }],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'border',
                    'direction',
                    'gap',
                    'feature',
                    'color',
                    'variant',
                    'size',
                    'wrap',
                ],
            },
        ],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        "@typescript-eslint/strict-boolean-expressions": 'off',
        "@typescript-eslint/naming-convention": "off",
        "react/no-deprecated": "off",

    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
}
