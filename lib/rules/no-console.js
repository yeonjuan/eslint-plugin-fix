/**
 * @file fix no-console
 * @author YeonJuAn
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const util = require('../util');
const { NodeType } = require('../ast-utils');

/**
 * @typedef {...*} Problem
 */

/**
 * Check whether the problem is fixable or not.
 *
 * @param {Problem} problem The problem from base rule.
 * @returns {boolean} True if the problem is fixable.
 */
function filterFixable(problem) {
  const { node } = problem;

  return (
    node.parent.parent
    && node.parent.parent.type === NodeType.ExpressionStatement
  );
}

/**
 * Map the non-fixable problem to fixable problem.
 *
 * @param {Problem} problem The non-fixable problem from base rule.
 * @returns {Problem} Fixable Problem
 */
function mapReport(problem) {
  return {
    ...problem,
    message: 'I can fix it',
    messageId: null,
    fix(fixer) {
      const { node } = problem;
      return fixer.remove(node.parent);
    },
  };
}

module.exports = util.filterMapReport(
  'no-console',
  filterFixable,
  mapReport,
);
