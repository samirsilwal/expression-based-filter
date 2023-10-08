import { OPERATOR } from './operators';
import { generatePredicateFromConfig } from './compute';

const data = [
  {
    value1: 12,
    value2: 15,
    data: 'Hello',
    test: {
      nested: 12
    }
  },
  {
    value1: 11,
    value2: 6,
    data: 'world',
    test: {
      nested: 11
    }
  }
];

const config = [
  {
    operand: 'value1',
    operator: OPERATOR.isGreaterThan,
    compareWith: 5
  },
  {
    operand: 'value2',
    operator: OPERATOR.andIsLessThan,
    compareWith: '$.test.nested'
  }
  // {
  //   operand: 'value2',
  //   operator: OPERATOR.andIsEqualTo,
  //   compareWith: 8
  // }
];

console.log(
  data.filter(obj => {
    const exp = generatePredicateFromConfig(config, obj);
    return exp.computeFor(obj, config);
  })
);
