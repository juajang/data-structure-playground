import Element from "./Element.js";
import { ANIMATION } from "../util.js";

export default function QueueList({ $target, operation }) {
  this.$target = $target;
  this.$queueList = document.createElement("UL");
  this.$target.appendChild(this.$queueList);
  this.$queueList.className = "list";

  this.render = ({ data, operation }) => {
    this.$queueList.innerHTML = '';
    data.forEach((item) => {
      if (item === data[data.length - 1] && operation === "enqueue") {
        new Element({
          $target: this.$queueList,
          innerText: item,
          animation: ANIMATION["NEW_ELEMENT_ADDED"],
        });
      } else if (item === data[0] && operation === "dequeue") {
        new Element({
          $target: this.$queueList,
          innerText: item,
          animation: ANIMATION["ELEMENT_DEQUEUED"],
        });
      }
      else {
        if (operation === "dequeue") {
          new Element({
            $target: this.$queueList,
            innerText: item,
            animation: ANIMATION["ELEMENT_MOVED_LEFT"]
          });
        } else {
          new Element({
            $target: this.$queueList,
            innerText: item,
          });
        }
      }
    })
  };
};
