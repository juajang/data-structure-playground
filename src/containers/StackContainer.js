import Button from '../components/Button.js';
import StackList from "../components/StackList.js";
import Stack from '../dataStructure/Stack.js';

export default function StackContainer() {
  this.$stackContainer = document.querySelector(".stack");
  this.$buttonWrapper = document.querySelector('.stack.button-wrapper');

  this.initiate = () => {
    new Button({
      $target: this.$buttonWrapper,
      innerText: "PUSH",
      onClick: this.pushData
    });
    new Button({
      $target: this.$buttonWrapper,
      innerText: "POP",
      onClick: this.popData
    });
    this.stack = new Stack();
    this.stackList = new StackList({$target: this.$stackContainer});
  }

  this.pushData = () => {
    const currentData = this.stack.getData();
    this.stack.push(
      currentData.length === 0
        ? 1
        : currentData[currentData.length - 1] + 1
    );
    this.stackList.render({
      data: this.stack.getData(),
      operation: "push",
    })
  };

  this.popData = () => {
    this.stackList.render({
      data: this.stack.getData(),
      operation: "pop",
    })
    this.stack.pop();
  };

  this.initiate();
}