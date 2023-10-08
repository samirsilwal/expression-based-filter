import { OPERATOR } from "./operators";
import { Predicate } from "./predicate";
import { flatten } from "./util";

export function createExpressionFromConfig(operator: OPERATOR, value: number, exp: Predicate) {
  switch (operator) {
    case OPERATOR.isLessThan:
      exp = exp.isLessThan(value, operator)

      break;
    case OPERATOR.isGreaterThan:
      exp = exp.isGreaterThan(value, operator)

      break;
    case OPERATOR.andIsGreaterThan:
      exp = exp.and().isGreaterThan(value, operator)

      break;
    case OPERATOR.andIsLessThan:
      exp.and().isLessThan(value, operator)

      break;
    case OPERATOR.orIsLessThan:
      exp = exp.or().isLessThan(value, operator)

      break;
    case OPERATOR.orIsGreaterThan:
      exp = exp.or().isGreaterThan(value, operator)

      break;
    case OPERATOR.isEqualTo:
      exp = exp.isEqualTo(value, operator)

      break;
    case OPERATOR.orIsEqualTo:
      exp = exp.or().isEqualTo(value, operator)

      break;
    case OPERATOR.andIsEqualTo:
      exp = exp.and().isEqualTo(value, operator)

      break;
    default:
      break;
  }

  return exp
}

export function generatePredicateFromConfig(configs: any, obj: any) {
  let exp = new Predicate()

  for (const conf of configs) {
    const exVal = typeof conf.compareWith == 'string' && conf.compareWith.startsWith('$') ? (flatten(obj) as any)[conf.compareWith.split('$.')[1]] : conf.compareWith
    exp = createExpressionFromConfig(conf.operator, exVal, exp)
  }

  return exp
}

