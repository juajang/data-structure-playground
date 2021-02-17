import { LinkedListElement } from "./Element.js";

export default function LinkedListList({ $target }) {
  this.$target = $target;
  this.$linkedListList = document.createElement("UL");
  this.$target.appendChild(this.$linkedListList);
  this.$linkedListList.className = "list";

  this.render = ({ linkedList, setCurrentNode, currentNode }) => {
    this.$linkedListList.innerHTML = '';

    for (let { data } of linkedList) {
      const newElement = new LinkedListElement({
        $target: this.$linkedListList,
        innerText: data,
        setCurrentNode,
        isClicked: data === currentNode,
      });
    }
  }
}