import Element from "./Element.js";
import { ANIMATION } from "../util.js";

export default function QueueList({ $target }) {
  this.$target = $target;
  this.$queueList = document.createElement("UL");
  this.$target.appendChild(this.$queueList);
  this.$queueList.className = "list";

  this.render = ({ data, animation }) => {
    this.$queueList.innerHTML = '';
    data.forEach((item) => {
      if (item === data[data.length - 1] && animation === ANIMATION["NEW_ELEMENT_ADDED"]) {
        new Element({
          $target: this.$queueList,
          innerText: item,
          animation
        });
      } else if (item === data[0] && animation === ANIMATION["ELEMENT_REMOVED"]) {
        new Element({
          $target: this.$queueList,
          innerText: item,
          animation
        });
      }
      else {
        new Element({
          $target: this.$queueList,
          innerText: item,
          animation: '',
        });
      }
    })
  };
};
