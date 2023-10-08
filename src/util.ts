import { OPERATOR } from './operators';
import { Predicate } from './predicate';

export function flatten(obj: any, roots: string[] = [], sep = '.'): Object {
  return Object.keys(obj).reduce((memo, prop: string) => {
    return Object.assign(
      {},
      memo,
      Object.prototype.toString.call(obj[prop]) === '[object Object]'
        ? flatten(obj[prop], roots.concat([prop]), sep)
        : {
            [roots.concat([prop]).join(sep)]: obj[prop]
          }
    );
  }, {});
}

export function createExpressionFromConfig(operator: OPERATOR, value: number | string, exp: Predicate) {
  switch (operator) {
    case OPERATOR.isEqualTo:
      exp = exp.isEqualTo(value, operator);

      break;
    case OPERATOR.isLessThan:
      exp = exp.isLessThan(+value, operator);

      break;
    case OPERATOR.isGreaterThan:
      exp = exp.isGreaterThan(+value, operator);

      break;
    case OPERATOR.isLessThanInclusive:
      exp = exp.isLessThanInclusive(+value, operator);

      break;
    case OPERATOR.isGreaterThanInclusive:
      exp = exp.isGreaterThanInclusive(+value, operator);

      break;
    case OPERATOR.hasSubstring:
      exp = exp.hasSubstring(String(value), operator);

      break;

    // AND chained
    case OPERATOR.andIsEqualTo:
      exp = exp.and().isEqualTo(value, operator);

      break;
    case OPERATOR.andIsLessThan:
      exp.and().isLessThan(+value, operator);

      break;
    case OPERATOR.andIsGreaterThan:
      exp = exp.and().isGreaterThan(+value, operator);

      break;
    case OPERATOR.andIsLessThanInclusive:
      exp.and().isLessThanInclusive(+value, operator);

      break;
    case OPERATOR.andIsGreaterThanInclusive:
      exp = exp.and().isGreaterThanInclusive(+value, operator);

      break;
    case OPERATOR.hasSubstring:
      exp = exp.and().hasSubstring(String(value), operator);

      break;

    // OR chained
    case OPERATOR.orIsLessThan:
      exp = exp.or().isLessThan(+value, operator);

      break;
    case OPERATOR.orIsGreaterThan:
      exp = exp.or().isGreaterThan(+value, operator);

      break;
    case OPERATOR.orIsEqualTo:
      exp = exp.or().isEqualTo(value, operator);

      break;
    case OPERATOR.orIsLessThanInclusive:
      exp = exp.or().isLessThanInclusive(+value, operator);

      break;
    case OPERATOR.orIsGreaterThanInclusive:
      exp = exp.or().isGreaterThanInclusive(+value, operator);

      break;
    case OPERATOR.hasSubstring:
      exp = exp.or().hasSubstring(String(value), operator);

      break;

    default:
      break;
  }

  return exp;
}
