module.exports = {
   env: {
      browser: true,
      es6: true,
   },
   extends: [
      'airbnb',
      'prettier',
      'prettier/react',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
   ],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parser: 'babel-eslint',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['react', 'prettier', 'import', 'jsx-a11y'],
   rules: {
      'react/jsx-filename-extension': [
         'error',
         {
            extensions: ['.tsx', '.js'],
         },
      ],
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
   },
   settings: {
      'import/parsers': {
         '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
         typescript: {},
      },
   },
};
