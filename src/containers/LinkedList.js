import Button from '../components/Button.js';

export default function LinkedList() {
  let data = [];

  this.$stack = document.querySelector(".linked-list");
  this.$buttonWrapper = document.querySelector('.linked-list.button-wrapper');

  this.initiate = () => {
    new Button({
      $target: this.$buttonWrapper,
      innerText: "ADD",
      onClick: this.addData
    });
    new Button({
      $target: this.$buttonWrapper,
      innerText: "REMOVE",
      onClick: this.removeData
    });
    //this.stackList = new StackList({ $target: this.$stack });
  }

  this.addData = () => {

  };

  this.removeData = () => {

  };

  this.initiate();
}