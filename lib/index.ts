/**
 * @file fix
 * @author YeonJuAn
 */
import noConsole from './rules/no-console';
import noDebugger from './rules/no-debugger';
import noAlert from './rules/no-alert';

export const rules =  {
  'no-console': noConsole,
  'no-debugger':  noDebugger,
  'no-alert': noAlert,
}
