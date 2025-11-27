import path from 'path';

const buildEslintCommand = (filenames) =>
  `eslint --fix --format stylish ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const lintStaged = {
  '*.{js,jsx,ts,tsx}': (stagedFiles) => [
    'tsc --noEmit',
    buildEslintCommand(stagedFiles),
    `npx prettier --write ${stagedFiles.join(' ')}`,
  ],
  '*.{json,md,css,scss,graphql,yml}': ['npx prettier --write'],
};

export default lintStaged;
