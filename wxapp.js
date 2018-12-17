const rules = require('./rules/base');
const rulesOrder = require('./rules/order');
const rulesWxapp = require('./rules/wxapp');

module.exports = {
  additionalDocumentSelectors: 'wxss',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: { ...rules, ...rulesOrder, ...rulesWxapp },
};
