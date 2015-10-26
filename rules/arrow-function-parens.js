module.exports = function (context) {
  var message = 'arrow function with a single argument should not be wrapped in parens'

  function arrowFunctionParens (node) {
    var token = context.getFirstToken(node)
    var numIdentifiers = 0
    while (true) {
      if (token.type === 'Identifier') {
        numIdentifiers++
      } else if (token.value !== '(' && token.value !== ',') {
        break
      }
      token = context.getTokenAfter(token)
    }

    if (numIdentifiers === 1 && token.value !== '=>') {
      context.report(node, message)
    }
  }

  return {
    ArrowFunctionExpression: arrowFunctionParens
  }
}
