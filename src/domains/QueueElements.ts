import { ChainOperator, OPERATOR } from '../operators';

export interface Mapping<T> {
  [key: string]: T;
}

export interface QueueContent {
  type: OPERATOR;
  chain: ChainOperator;
  method: (val: number | string) => boolean;
}

export type QueueElement = Mapping<QueueContent>;
