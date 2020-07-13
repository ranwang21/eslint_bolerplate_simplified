/**
 * @fileoverview a personal eslint plugin
 * @author Ran Wang
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules')

module.exports.configs = {
    // export a config named recommended with the below settings
    recommended: {
        'plugins': [
            'ran-personal-plugin' // eslint-plugin-ran-personal-plugin
        ],
        rules: {
            'ran-personal-plugin/expire': 'warn',
            'ran-personal-plugin/no-fixme': 'error',
            'ran-personal-plugin/no-giraffe': 'off'
        }
    }
}
