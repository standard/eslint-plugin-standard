var RuleTester = require('eslint').RuleTester
var rule = require('../rules/arrow-function-parens')

var valid = [
  'a.then(foo => {});',
  'a.then(foo => a);',
  'a.then((foo, bar) => {});',
  'a.then((foo, bar) => a);'
].map(function (code) {
  return {
    code: code,
    ecmaFeatures: { arrowFunctions: true }
  }
})

var message = 'arrow function with a single argument should not be wrapped in parens'

var invalid = [
  'a.then((foo) => {});',
  'a.then((foo) => { if (true) {}; });'
].map(function (code) {
  return {
    code: code,
    ecmaFeatures: { arrowFunctions: true },
    errors: [{ message: message }]
  }
})

var ruleTester = new RuleTester()
ruleTester.run('arrow-function-parens', rule, {
  valid: valid,
  invalid: invalid
})
