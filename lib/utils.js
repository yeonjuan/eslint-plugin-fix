const eslint = require('eslint');

/**
 * @typedef {...*} Rule
 */

const rules = new eslint.Linter().getRules();
const {
  filterReports: composerFilter,
  mapReports: composerMap,
} = require('eslint-rule-composer');

/**
 * @param id
 * @param filter
 * @param fixType
 */
function mapReports(id, map, fixType = 'code') {
  const rule = composerMap(rules.get(id), map);
  rule.meta.fixable = fixType;
  return rule;
}

/**
 * @param {string} id The base rule Id.
 * @param {Function} filter Filtering function.
 * @param {Function} map Mapping function.
 * @param {"code"|"space"} [fixType="code"] Fixable Type
 * @returns {Rule} Fixable rule
 */
function filterMapReport(id, filter, map, fixType = 'code') {
  const rule = composerMap(
    composerFilter(rules.get(id), filter),
    map,
  );
  rule.meta.fixable = fixType;
  return rule;
}

function extendsProblem(problem, { message = 'I can fix it', fix, messageId = null }) {
  return {
    ...problem,
    messageId,
    message,
    fix,
  };
}

module.exports = {
  mapReports,
  filterMapReport,
  extendsProblem,
};
