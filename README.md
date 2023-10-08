## Expression based filter

Filters the given object based on the predicate configuration

## Example

### Config 
  **operand** - The key of value we are trying to compare from given object. <br>
  **operator** - Operator desired to be performed to operand.
  **compareWith** - Can be a value (number for now) or a key of the object we desire operand to be compared with. It begins with `$.` example: `$.key1.nestedKey`

```
config = [
  {
    operand: 'value1',
    operator: OPERATOR.isGreaterThan,
    compareWith: 5
  },
  {
    operand: 'value2',
    operator: OPERATOR.andIsLessThan,
    compareWith: '$.test.nested'
  },
  {
    operand: 'value2',
    operator: OPERATOR.andIsEqualTo,
    compareWith: 8
  }
] 
```
## Filter data

```
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
]

data.filter(obj => {
  const exp = generatePredicateFromConfig(config, obj)
  return exp.computeFor(obj, config)
})
```
