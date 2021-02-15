import Button from '../components/Button.js';
import { ANIMATION } from "../util.js";
import QueueList from "../components/QueueList.js";

export default function Queue() {
  this.queuedData = [];

  this.$stack = document.querySelector("#queue");
  this.$buttonWrapper = document.querySelector('#queue-button-wrapper');

  this.initiate = () => {
    new Button({
      $target: this.$buttonWrapper,
      innerText: "ENQUEUE",
      onClick: this.enqueueData
    });
    new Button({
      $target: this.$buttonWrapper,
      innerText: "DEQUEUE",
      onClick: this.dequeueData
    });
    this.queueList = new QueueList({ $target: this.$stack });
  }

  this.enqueueData = () => {
    this.queuedData = this.queuedData.concat(
      this.queuedData.length === 0
        ? 1
        : this.queuedData[this.queuedData.length - 1] + 1
    );
    this.queueList.render({
      data: this.queuedData,
      animation: ANIMATION["NEW_ELEMENT_ADDED"],
    })
  };

  this.dequeueData = () => {
    this.queueList.render({
      data: this.queuedData,
      animation: ANIMATION["ELEMENT_REMOVED"],
    })
    this.queuedData = this.queuedData.slice(1);
    console.log(this.queuedData);
  };

  this.initiate();
}