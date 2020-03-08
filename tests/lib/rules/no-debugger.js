/**
 * @file no-debugger
 * @author YeonJuAn
 */


//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-debugger');


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const error = { message: 'I can fix it', type: 'DebuggerStatement' };
const ruleTester = new RuleTester();
ruleTester.run('no-debugger', rule, {
  valid: [],

  invalid: [
    {
      code: 'debugger',
      output: '',
      errors: [error],
    },
  ],
});
