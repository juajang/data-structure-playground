import Element from "./Element.js";

export default function StackList({ $target }) {
  this.$target = $target;
  this.$stackList = document.createElement("UL");
  this.$target.appendChild(this.$stackList);
  this.$stackList.className = "list";

  this.render = ({ data, operation }) => {
    this.$stackList.innerHTML = '';

    data.forEach((item) => {
      const newElement = new Element({
        $target: this.$stackList,
        innerText: item,
      });

      if (item === data.length && operation === "push") {
        newElement.addAnimation();
      } else if (item === data.length && operation === "pop") {
        newElement.popAnimation();
        newElement.removeAfterDelay(250);
      }
    })
  };
};
