/**
 * @file no-debugger
 * @author YeonJuAn
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const utils = require('../utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Map the non-fixable problem to fixable problem.
 *
 * @param {Problem} problem The non-fixable problem from base rule.
 * @returns {Problem} Fixable Problem
 */
function mapReport(problem) {
  return utils.extendsProblem(problem, {
    fix(fixer) {
      const { node } = problem;
      return fixer.remove(node.parent);
    },
  });
}

module.exports = utils.mapReports(
  'no-debugger',
  mapReport,
);
