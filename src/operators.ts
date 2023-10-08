export enum OPERATOR {
  isEqualTo = 'isEqualTo',
  isLessThan = 'isLessThan',
  hasSubstring = 'hasSubstring',
  isGreaterThan = 'isGreaterThan',
  isStringEqualTo = 'isStringEqualTo',
  isLessThanInclusive = 'isLessThanInclusive',
  isGreaterThanInclusive = 'isGreaterThanInclusive',

  orIsEqualTo = 'orIsEqualTo',
  orIsLessThan = 'orIsLessThan',
  orHasSubstring = 'orHasSubstring',
  orIsGreaterThan = 'orIsGreaterThan',
  orIsStringEqualTo = 'orIsStringEqualTo',
  orIsLessThanInclusive = 'orIsLessThanInclusive',
  orIsGreaterThanInclusive = 'orIsGreaterThanInclusive',

  andIsEqualTo = 'andIsEqualTo',
  andIsLessThan = 'andIsLessThan',
  andHasSubstring = 'andHasSubstring',
  andIsGreaterThan = 'andIsGreaterThan',
  andIsStringEqualTo = 'andIsStringEqualTo',
  andIsLessThanInclusive = 'andIsLessThanInclusive',
  andIsGreaterThanInclusive = 'andIsGreaterThanInclusive'
}

export enum ChainOperator {
  OR = 'or',
  AND = 'and'
}
