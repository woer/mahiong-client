module.exports = {
  root: true,
  // parser: 'babel-eslint',
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  
  // 支持HTML格式：.html, .xhtml, .htm, .xml, .vue, .hbs, .mustache, .handelbars, .php, .twig
  // https://github.com/BenoitZugmeyer/eslint-plugin-html
  plugins: [
    'html'
  ],
  "globals": {
    "__PROD__": true,
    "__DEV__": true,
    "__TEST__": true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 'semi': [2, 'always'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
