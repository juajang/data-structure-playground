import { LinkedListElement } from "./Element.js";

export default function LinkedListList({ $target }) {
  this.$target = $target;
  this.$linkedListList = document.createElement("UL");
  this.$target.appendChild(this.$linkedListList);
  this.$linkedListList.className = "list";

  this.render = ({ linkedList, setCurrentNode, currentNode, newElement, removedElement }) => {
    this.$linkedListList.innerHTML = '';

    let moveLeft = false;
    for (let { data } of linkedList) {
      const element = new LinkedListElement({
        $target: this.$linkedListList,
        innerText: data,
        setCurrentNode,
        isClicked: data === currentNode,
      });

      if (newElement === data) {
        element.addAnimation();
      }

      if (moveLeft) {
        element.moveLeftAfterDelay(300);
      }

      if (removedElement === data) {
        element.dequeueAnimation();
        element.removeAfterDelay(600);
        moveLeft = true;
      }
    }
  }
}