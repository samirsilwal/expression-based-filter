import { QueueContent, QueueElement } from './domains/QueueElements';

export class Queue {
  private head: number;
  private tail: number;
  private elements: QueueElement;

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: QueueContent) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}
