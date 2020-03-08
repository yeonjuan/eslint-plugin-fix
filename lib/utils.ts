import eslint, { Rule } from 'eslint';
import {
  filterReports,
  mapReports,
  Predicate,
  Problem,
  FixType,
} from 'eslint-rule-composer';

const rules = new eslint.Linter().getRules();

function mapBaseRule(
  id: string,
  map: Predicate<Problem>,
  fixType: FixType = 'code'
): Rule.RuleModule {
  const rule = mapReports(rules.get(id) as Rule.RuleModule, map);
  if (rule.meta) {
    rule.meta.fixable = fixType;
  }
  return rule;
}

function filterBaseRule(
  id: string,
  filter: Predicate<boolean>,
  fixType: FixType = 'code'
): Rule.RuleModule {
  const rule = filterReports(rules.get(id) as Rule.RuleModule, filter);
  if (rule.meta) {
    rule.meta.fixable = fixType;
  }
  return rule;
}

function filterMapBaseRule(
  id: string,
  filter: Predicate<boolean>,
  map: Predicate<Problem>,
  fixType: FixType = 'code'
) {
  const rule = mapReports(
    filterReports(rules.get(id) as Rule.RuleModule, filter),
    map,
  );
  if (rule.meta) {
    rule.meta.fixable = fixType;
  }
  return rule;
}

function extendsProblem(
  problem: Problem,
  {
    message = 'I can fix it',
    messageId = null,
    fix,
  }: Partial<Problem>
): Problem {
  return {
    ...problem,
    message, messageId, fix,
  }
}

export default {
  mapBaseRule,
  filterBaseRule,
  extendsProblem,
  filterMapBaseRule
}
