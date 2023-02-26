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
    files: ['./src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.tsx', '.jsx']
    }],
    'import/extensions': [2, {
      ts: 'never',
      lazy: 'igmorePackages',
      svg: 'always',
      scss: 'always'
    }],
    'max-len': [2, {
      code: 120,
      ignoreComments: true
    }],
    'comma-dangle': ['error', 'never'],
    'i18next/no-literal-string': 2,
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off'
  },
  globals: {
    __IS_DEV__: true
  }
};
