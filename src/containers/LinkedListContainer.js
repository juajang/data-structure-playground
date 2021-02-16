import Button from "../components/Button.js";

export default function LinkedListContainer() {
  let data = {

  };

  this.$linkedList = document.querySelector(".linked-list");
  this.$buttonWrapper = document.querySelector('.linked-list.button-wrapper');

  this.initiate = () => {
    new Button({
      $target: this.$buttonWrapper,
      innerText: "ADD",
      onClick: this.addData,
    })
    new Button({
      $target: this.$buttonWrapper,
      innerText: "REMOVE",
      onClick: this.removeData,
    })
  }

  this.addData = (index) => {

  };

  this.removeData = () => {

  };

  this.initiate();
}