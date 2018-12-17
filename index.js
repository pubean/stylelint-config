const rules = require('./rules/base');
const rulesOrder = require('./rules/order');
const unsupportedBrowser = require('./rules/unsupported-browser');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: { ...rules, ...rulesOrder, ...unsupportedBrowser },
};
