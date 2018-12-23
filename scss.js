const rules = require('./rules/base');
const rulesOrder = require('./rules/order');
const rulesScss = require('./rules/scss');
const unsupportedBrowser = require('./rules/unsupported-browser');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: { ...rules, ...rulesScss, ...rulesOrder, ...unsupportedBrowser },
};
