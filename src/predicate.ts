import { Config } from './domains/Config';
import { ChainOperator, OPERATOR } from './operators';
import { Queue } from './queue';

export class Predicate {
  private queue = new Queue();
  private chainOperator: ChainOperator = ChainOperator.OR;
  private result: boolean = false;

  computeFor(obj: any, configs: Config[]) {
    while (!this.queue.isEmpty) {
      const firstOnQueue = this.queue.dequeue();
      this.chainOperator = firstOnQueue.chain;

      const conf = configs.find((c: Config) => c.operator === firstOnQueue.type);

      if (conf) {
        firstOnQueue.method(obj[conf.operand]);
      }
    }
    const computed = this.result;

    this.result = true;
    this.chainOperator = ChainOperator.OR;

    return computed;
  }
  computeForVal(val: number | string) {
    while (!this.queue.isEmpty) {
      const firstOnQueue = this.queue.dequeue();
      this.chainOperator = firstOnQueue.chain;

      firstOnQueue.method(val);
    }

    const computed = this.result;

    this.result = true;
    this.chainOperator = ChainOperator.OR;

    return computed;
  }
  isLessThan(a: number, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        if (typeof value == 'string') return this.result;

        this.result = this.chainOperator == ChainOperator.OR ? this.result || value < a : this.result && value < a;
        return this.result;
      }
    });

    return this;
  }

  isGreaterThan(a: number, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        if (typeof value == 'string') return this.result;

        this.result = this.chainOperator == ChainOperator.OR ? this.result || value > a : this.result && value > a;
        return this.result;
      }
    });

    return this;
  }

  isEqualTo(a: number | string, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        this.result = this.chainOperator == ChainOperator.OR ? this.result || value == a : this.result && value == a;
        return this.result;
      }
    });

    return this;
  }

  hasSubstring(a: string, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        if (typeof value == 'number') return this.result;

        this.result =
          this.chainOperator == ChainOperator.OR ? this.result || value.includes(a) : this.result && value.includes(a);
        return this.result;
      }
    });

    return this;
  }

  isLessThanInclusive(a: number, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        if (typeof value == 'string') return this.result;

        this.result = this.chainOperator == ChainOperator.OR ? this.result || value <= a : this.result && value <= a;
        return this.result;
      }
    });

    return this;
  }
  isGreaterThanInclusive(a: number, t?: OPERATOR) {
    this.queue.enqueue({
      type: t,
      chain: this.chainOperator,
      method: (value: number | string) => {
        if (typeof value == 'string') return this.result;

        this.result = this.chainOperator == ChainOperator.OR ? this.result || value >= a : this.result && value >= a;
        return this.result;
      }
    });

    return this;
  }

  or() {
    this.chainOperator = ChainOperator.OR;

    return this;
  }

  and() {
    this.chainOperator = ChainOperator.AND;

    return this;
  }
}
