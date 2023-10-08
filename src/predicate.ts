import { Config } from './domains/Config';
import { ChainOperator, OPERATOR } from './operators'
import { Queue } from './queue'

export class Predicate {
  private queue = new Queue()
  private chainOperator: ChainOperator = ChainOperator.OR;
  private result: boolean = true

  computeFor(obj: any, configs: Config[]) {
    while (!this.queue.isEmpty) {
      const firstOnQueue = this.queue.dequeue()
      this.chainOperator = firstOnQueue.chain

      const conf = configs.find((c: Config) => c.operator === firstOnQueue.type)

      if (conf) {
        firstOnQueue.method(obj[conf.operand])
      }
    }
    const computed = this.result

    this.result = true
    this.chainOperator = ChainOperator.OR

    return computed
  }

  isLessThan(a: number, t: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value < a : this.result && value < a
        return this.result
      }
    })

    return this
  }

  isGreaterThan(a: number, t: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value > a : this.result && value > a
        return this.result
      }
    })

    return this
  }

  isEqualTo(a: number, t: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value == a : this.result && value == a
        return this.result
      }
    })

    return this
  }

  isLessThanInclusive(a: number, t: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value <= a : this.result && value <= a
        return this.result
      }
    })

    return this
  }
  isGreaterThanInclusive(a: number, t: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value >= a : this.result && value >= a
        return this.result
      }
    })

    return this
  }

  or() {
    this.chainOperator = ChainOperator.OR

    return this
  }

  and() {
    this.chainOperator = ChainOperator.AND

    return this
  }
}
