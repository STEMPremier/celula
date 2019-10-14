import pkg from './package.json';

export default [
  // UMD build, for use via <script> tag in a browser
  {
    input: 'src/index.js',
    output: {
      name: 'tui-kit',
      file: pkg.browser,
      format: 'umd',
    },
  },
  // EMS build, for use via `import`
  // AND
  // CJS build, for use via `require`
  {
    input: 'src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'cjs' },
    ],
  },
];
