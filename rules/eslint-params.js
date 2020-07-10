module.exports = {

  create: function(context) {

      return {
        // in the exlintrc, we passed in several function names as params, here is to check if these functions are in the tested file, if yes, error
          CallExpression: function(node){
              if(context.options.indexOf(node.callee.name) > -1){
                  context.report(node, node.callee.name + ' () is NOT allowed.')
              }
          }
      }

  }
};
