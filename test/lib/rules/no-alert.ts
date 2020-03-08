import { RuleTester } from 'eslint';
import rule from '../../../lib/rules/no-alert';

const ruleTester = new RuleTester();
const error = { message: 'I can fix it', type: 'CallExpression' };
ruleTester.run('no-alert', rule, {
  valid: [
    { code: "a = alert('a');" },
  ],
  invalid: [
    {
      code: "alert('a')",
      output: '',
      errors: [error]
    },
  ],
});
