import Element from "./Element.js";

export default function StackList({ $target }) {
  this.$target = $target;
  this.$stackList = document.createElement("UL");
  this.$target.appendChild(this.$stackList);
  this.$stackList.className = "list";

  // remove all old children, and draw new children
  this.render = (data) => {
    this.$stackList.innerHTML = '';
    data.forEach((item) => {
      new Element({ $target: this.$stackList, innerText: item });
    })
  };
};
