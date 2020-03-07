/**
 * @file fix no-console
 * @author YeonJuAn
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-console');


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-console', rule, {
  valid: [
    { code: "a = console.log('a');" },
    { code: "foo(console.log('a'));" },
  ],

  invalid: [
    {
      code: "console.log('a')",
      output: '',
      errors: [{
        message: 'I can fix it',
        type: 'MemberExpression',
      }],
    },
  ],
});
