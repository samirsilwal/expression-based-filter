export enum OPERATOR {
  isEqualTo = 'isEqualTo',
  isLessThan = 'isLessThan',
  isGreaterThan = 'isGreaterThan',
  isLessThanInclusive = 'isLessThanInclusive',
  isGreaterThanInclusive = 'isGreaterThanInclusive',

  orIsEqualTo = 'orIsEqualTo',
  orIsLessThan = 'orIsLessThan',
  orIsGreaterThan = 'orIsGreaterThan',
  orIsLessThanInclusive = 'orIsLessThanInclusive',
  orIsGreaterThanInclusive = 'orIsGreaterThanInclusive',

  andIsEqualTo = 'andIsEqualTo',
  andIsLessThan = 'andIsLessThan',
  andIsGreaterThan = 'andIsGreaterThan',
  andIsLessThanInclusive = 'andIsLessThanInclusive',
  andIsGreaterThanInclusive = 'andIsGreaterThanInclusive'
}

export enum ChainOperator {
  OR = 'or',
  AND = 'and'
}
