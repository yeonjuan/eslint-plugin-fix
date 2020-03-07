const eslint = require('eslint');

/**
 * @typedef {...*} Rule
 */

const rules = new eslint.Linter().getRules();
const { filterReports, mapReports } = require('eslint-rule-composer');

/**
 * @param {string} id The base rule Id.
 * @param {Function} filter Filtering function.
 * @param {Function} map Mapping function.
 * @returns {Rule} Fixable rule
 */
function filterMapReport(id, filter, map) {
  const rule = mapReports(
    filterReports(rules.get(id), filter),
    map,
  );
  rule.meta.fixable = 'code';
  return rule;
}

module.exports = {
  filterMapReport,
};
