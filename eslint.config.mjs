import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  globalIgnores([
    '**/*.json',
    '**/node_modules/**',
    '**/public/**',
    '**/styles/**',
    '**/.next/**',
    '**/coverage/**',
    '**/dist/**',
    '**/.turbo/**',
    '**/sentry.client.config.ts',
    '**/tsconfig.tsbuildinfo',
    '**/.yarn/**',
    '**/@types/resources.d.ts',
    '**/pages_backup/**',
    '**/api/generated/**',
    '**/.gitlab-ci-local/**',
    'eslint.config.mjs',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  ...fixupConfigRules(compat.extends('plugin:testing-library/react')),

  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
          moduleDirectory: ['node_modules'],
        },
      },
    },

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { tsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...Object.fromEntries(Object.entries(globals.jest).map(([key]) => [key, 'off'])),
      },
      parser: tsParser,
    },
    plugins: {
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@stylistic/quotes': 'off',
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/no-floating-decimal': 'error',
      'block-scoped-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'no-global-assign': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-async-promise-executor': 'error',
      'no-unsafe-finally': 'error',
      'no-useless-catch': 'error',
      'consistent-return': 'warn',
      'prefer-regex-literals': 'error',
      'no-console': 'error',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'import/no-duplicates': ['error'],
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^next-intl/server$', '^@typescript-eslint/'],
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'error',
      'import/no-anonymous-default-export': 'off',
      '@next/next/no-html-link-for-pages': ['error', './pages'],
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-unwanted-polyfillio': 'error',
      '@next/next/no-title-in-document-head': 'error',
      '@next/next/google-font-display': 'error',
      '@next/next/no-css-tags': 'error',
      '@next/next/no-head-element': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/no-styled-jsx-in-document': 'error',
      '@next/next/no-typos': 'error',
      '@next/next/no-duplicate-head': 'error',
      'testing-library/await-async-utils': 'warn',
      'testing-library/no-wait-for-side-effects': 'warn',
      curly: ['error', 'multi-or-nest'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      'if-newline': 'off',
      'import/no-webpack-loader-syntax': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions'],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `@/i18n/routing` instead.',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages. `react` related packages come first
            ['^react', '^next'],
            // Packages. Things that start with a letter (or digit or underscore).
            ['^@?\\w'],
            // Internal Aliases
            ['^(@/components|@/utils)(/.*|$)'],
            // Our own Aliases
            ['^\\/public'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
]);

export default eslintConfig;
