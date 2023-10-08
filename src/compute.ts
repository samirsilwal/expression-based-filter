import { Config } from './domains/Config';
import { Predicate } from './predicate';
import { createExpressionFromConfig, flatten } from './util';

export function generatePredicateFromConfig(configs: Config[], obj: any) {
  let exp = new Predicate();

  for (const conf of configs) {
    const exVal =
      typeof conf.compareWith == 'string' && conf.compareWith.startsWith('$')
        ? (flatten(obj) as any)[conf.compareWith.split('$.')[1]]
        : conf.compareWith;
    exp = createExpressionFromConfig(conf.operator, exVal, exp);
  }

  return exp;
}
