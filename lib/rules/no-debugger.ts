/**
 * @file no-debugger
 * @author YeonJuAn
 */

import utils from '../utils';
import { Problem } from 'eslint-rule-composer';
import { Node } from 'estree';

/**
 * Map the non-fixable problem to fixable problem.
 *
 * @param {Problem} problem The non-fixable problem from base rule.
 * @returns {Problem} Fixable Problem
 */
function mapReport(problem: Problem) {
  return utils.extendsProblem(problem, {
    fix(fixer) {
      const { node } = problem;
      return fixer.remove(node.parent as Node);
    },
  });
}

export default utils.mapBaseRule(
  'no-debugger',
  mapReport,
);
