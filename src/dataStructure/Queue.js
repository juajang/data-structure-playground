export default class Queue {
  constructor() {
    this.data = [];
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  enqueue(data) {
    this.setData(this.data.concat(data));
  }

  dequeue() {
    this.setData(this.data.slice(1));
  }
}