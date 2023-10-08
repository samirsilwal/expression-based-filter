
export function flatten(obj: any, roots: string[] = [], sep = '.'): Object {
  return Object
    .keys(obj)
    .reduce((memo, prop: string) => {
      return Object.assign({}, memo, Object.prototype.toString.call(obj[prop]) === '[object Object]'
        ? flatten(obj[prop], roots.concat([prop]), sep)
        : {
          [roots.concat([prop]).join(sep)]: obj[prop]
        }
      )
    }, {})
}

