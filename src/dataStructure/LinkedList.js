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

  addAfter(index, data) {
    const newNode = new Node({
      data,
    })
    let currentIndex = 0;
    for (let currentNode of this) {
      if (currentIndex === index) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      currentIndex++;
    }
  }

  remove(index) {
    if (this.head.data === index) {
      this.head = this.head.next;
      return;
    }
    let previousNode = this.head;
    for (let [currentNode, currentIndex] of [...this]) {
      if (currentIndex === index) {
        previousNode.next = currentNode.next;
        return;
      }
      previousNode = currentNode;
    }
  }
}