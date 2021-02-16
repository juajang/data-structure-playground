export default class Stack {
  constructor() {
    this.data = [];
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  push(data) {
    this.setData(this.data.concat(data));
  };

  pop() {
    this.setData(this.data.slice(0, -1));
  };
}