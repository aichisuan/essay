/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
  // 添加规则
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
};
