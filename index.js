'use strict'

module.exports = {
  rules: {
    'array-bracket-even-spacing': require('./rules/array-bracket-even-spacing.js'),
    'arrow-function-parens': require('./rules/arrow-function-parens.js'),
    'computed-property-even-spacing': require('./rules/computed-property-even-spacing.js'),
    'object-curly-even-spacing': require('./rules/object-curly-even-spacing.js')
  },
  rulesConfig: {
    'object-curly-even-spacing': 0,
    'array-bracket-even-spacing': 0,
    'computed-property-even-spacing': 0,
    'arrow-function-parens': 0
  }
}
