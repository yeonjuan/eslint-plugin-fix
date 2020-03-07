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
const error = { message: 'I can fix it', type: 'MemberExpression' };
ruleTester.run('no-console', rule, {
  valid: [
    { code: "a = console.log('a');" },
    { code: "foo(console.log('a'));" },
    { code: "console.log('a') + 1;" },
    { code: "a = console.warn('a');" },
    { code: "foo(console.warn('a'));" },
    { code: "console.warn('a') + 1;" },
  ],
  invalid: [
    {
      code: "console.log('a')",
      output: '',
      errors: [error],
    },
  ],
});
