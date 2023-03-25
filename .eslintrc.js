module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [{
    files: [
      './src/**/*.test.{ts,tsx}',
      './src/**/*.stories.{ts,tsx}'
    ],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.tsx', '.jsx']
    }],
    'import/extensions': [2, {
      ts: 'never',
      lazy: 'igmorePackages',
      svg: 'always',
      scss: 'always',
      jpg: 'always'
    }],
    'max-len': [2, {
      code: 120,
      ignoreComments: true
    }],
    'comma-dangle': ['error', 'never'],
    'i18next/no-literal-string': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'react/no-array-index-key': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'no-tabs': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-undef': 'off'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  }
};
