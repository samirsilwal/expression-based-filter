import { OPERATOR } from "../operators";

export interface Config {
  operand: string;
  operator: OPERATOR;
  compareWith: number | string;
}
