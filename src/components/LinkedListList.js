import { LinkedListElement } from "./Element.js";

export default function LinkedListList({ $target }) {
  this.$target = $target;
  this.$linkedListList = document.createElement("UL");
  this.$target.appendChild(this.$linkedListList);
  this.$linkedListList.className = "list";

  this.render = ({ linkedList, setCurrentIndex, currentIndex }) => {
    this.$linkedListList.innerHTML = '';

    let index = 0;
    for (let { data } of linkedList) {
      const newElement = new LinkedListElement({
        $target: this.$linkedListList,
        innerText: data,
        index,
        setCurrentIndex,
        isClicked: index === currentIndex,
      });

      index += 1;
    }
  }
}