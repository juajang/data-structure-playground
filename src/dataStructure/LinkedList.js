class Node {
  constructor({ data, next }) {
    this.data = data;
    this.next = next ?? null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  addFirst(data) {
    const newNode = new Node({
      next: this.head,
      data,
    })
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node({
      data,
    })
    if (!this.head) {
      this.head = newNode;
      return;
    }
    const length = [...this].length;
    [...this][length - 1].next = newNode;
  }

  addAfter(targetData, newData) {
    const newNode = new Node({
      data: newData,
    })
    for (let currentNode of this) {
      if (currentNode.data === targetData) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }
  }

  remove(data) {
    if (data === this.head.data) {
      this.head = this.head.next;
      return;
    }
    let previousNode = this.head;
    for (let currentNode of this) {
      if (currentNode.data === data) {
        previousNode.next = currentNode.next;
        return;
      }
      previousNode = currentNode;
    }
  }
}