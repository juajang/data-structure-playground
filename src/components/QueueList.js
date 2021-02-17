import { Element } from "./Element.js";

export default function QueueList({$target, operation}) {
  this.$target = $target;
  this.$queueList = document.createElement("UL");
  this.$target.appendChild(this.$queueList);
  this.$queueList.className = "list";

  this.render = ({data, operation}) => {
    this.$queueList.innerHTML = '';

    data.forEach((item) => {
      const newElement = new Element({
        $target: this.$queueList,
        innerText: item,
      });

      if (item === data[data.length - 1] && operation === "enqueue") {
        newElement.addAnimation();
      } else if (item === data[0] && operation === "dequeue") {
        newElement.dequeueAnimation();
        newElement.removeAfterDelay(600);
      } else if (operation === "dequeue") {
        newElement.moveLeftAfterDelay(300);
      }
    })
  };
};
