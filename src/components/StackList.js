import Element from "./Element.js";

export default function StackList({ $target }) {
  this.$target = $target;
  this.$stackList = document.createElement("UL");
  $target.appendChild(this.$stackList);

  // remove all old children, and draw new children
  this.render = (data) => {
    this.$stackList.innerHTML = '';
    data.forEach((item) => {
      new Element({ $target: this.$stackList, innerText: item });
    })
  };
};
