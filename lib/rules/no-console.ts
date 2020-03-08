import utils from '../utils';
import { Problem } from 'eslint-rule-composer';
import { Node } from 'estree';

/**
 * Map the non-fixable problem to fixable problem.
 * 
 * @param   problem A problem reported from eslint base rule.
 * @returns A Fixable problem
 */
function mapReport(problem: Problem): Problem {
  return utils.extendsProblem(problem, {
    fix(fixer) {
      const { node } = problem;
      return fixer.remove(node.parent.parent as Node);
    }
  })
}

export default utils.filterMapBaseRule(
  'no-console',
  ({node}) => node.parent.parent.type === "ExpressionStatement",
  mapReport,
  'code',
);