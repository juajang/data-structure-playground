import Button from './components/Button.js';
import StackList from "./components/StackList.js";

export default function Stack() {
  this.stackedData = [];

  this.$stack = document.querySelector("#stack");
  this.$buttonWrapper = document.querySelector('#stack-button-wrapper');

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
    this.stackedData = this.stackedData.concat(this.stackedData.length + 1);
    this.render();
  };

  this.popData = () => {
    this.stackedData = this.stackedData.slice(0, -1);
    this.render();
  };

  this.render = () => {
    console.log(this.stackedData);
    this.stackList.render(this.stackedData);
  };

  this.initiate();
}