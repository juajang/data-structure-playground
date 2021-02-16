import Button from '../components/Button.js';
import StackList from "../components/StackList.js";

export default function Stack() {
  let stackedData = [];

  this.$stack = document.querySelector(".stack");
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
    this.stackList = new StackList({ $target: this.$stack });
  }

  this.pushData = () => {
    stackedData = stackedData.concat(stackedData.length + 1);
    this.stackList.render({
      data: stackedData,
      operation: "push",
    })
  };

  this.popData = () => {
    this.stackList.render({
      data: stackedData,
      operation: "pop",
    })
    stackedData = stackedData.slice(0, -1);
  };

  this.initiate();
}