/**
 * @file fix no-console
 * @author YeonJuAn
 */

import utils from '../utils';
import { Problem } from 'eslint-rule-composer';
import { Node } from 'estree';

function mapReport(problem: Problem) {
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