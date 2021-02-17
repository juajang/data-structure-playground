import Button from "../components/Button.js";
import LinkedList from "../dataStructure/LinkedList.js";
import LinkedListList from "../components/LinkedListList.js";

export default function LinkedListContainer() {
  this.index = -1;

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
    const index = length - 1;

    let newItem = 1;
    for (let { data } of this.linkedList) {
      if (data >= newItem) newItem = data + 1;
    }

    if (length === 0) {
      this.linkedList.addFirst(newItem);
    } else if (index === length - 1) {
      this.linkedList.addLast(newItem);
    } else {
      console.log("add between");
      this.linkedList.addAfter(index, newItem);
    }
    console.log("after", [...this.linkedList]);

    this.render();
  };

  this.removeData = () => {

  };

  this.setCurrentIndex = (index) => {
    this.index = index;

    this.render();
  };

  this.render = () => {
    this.LinkedListList.render({
      linkedList: this.linkedList,
      setCurrentIndex: this.setCurrentIndex,
      currentIndex: this.index,
    })
  }

  this.initiate();
}