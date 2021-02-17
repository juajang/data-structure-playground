import Button from "../components/Button.js";
import LinkedList from "../dataStructure/LinkedList.js";
import LinkedListList from "../components/LinkedListList.js";

export default function LinkedListContainer() {
  this.currentNode = null;

  this.$linkedList = document.querySelector(".linked-list");
  this.$buttonWrapper = document.querySelector('.linked-list.button-wrapper');

  this.initiate = () => {
    new Button({
      $target: this.$buttonWrapper,
      innerText: "ADD",
      onClick: this.addData,
    })
    new Button({
      $target: this.$buttonWrapper,
      innerText: "REMOVE",
      onClick: this.removeData,
    })
    this.LinkedListList = new LinkedListList({
      $target: this.$linkedList
    });
    this.linkedList = new LinkedList();
  }

  this.addData = () => {
    const length = [...this.linkedList].length;
    const lastNode = this.currentNode === [...this.linkedList][length - 1];
    const targetNode = this.currentNode ?? lastNode;

    let newItem = 1;
    for (let { data } of this.linkedList) {
      if (data >= newItem) newItem = data + 1;
    }

    if (length === 0) {
      this.linkedList.addFirst(newItem);
    } else if (targetNode === lastNode) {
      this.linkedList.addLast(newItem);
    } else {
      this.linkedList.addAfter(this.currentNode, newItem);
    }

    this.render({
      newElement: newItem
    });
  };

  this.removeData = () => {
    if (!this.currentNode) {
      throw new Error("삭제할 element를 선택해주세요!")
    }
    this.render({
      removedElement: this.currentNode
    });
    this.linkedList.remove(this.currentNode);
  };

  this.setCurrentNode = (data) => {
    this.currentNode = data;
    this.render({});
  };

  this.render = ({ newElement, removedElement }) => {
    this.LinkedListList.render({
      linkedList: this.linkedList,
      setCurrentNode: this.setCurrentNode,
      currentNode: this.currentNode,
      newElement,
      removedElement,
    })
  }

  this.initiate();
}