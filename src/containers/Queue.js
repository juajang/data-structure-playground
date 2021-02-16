import Button from '../components/Button.js';
import QueueList from "../components/QueueList.js";

export default function Queue() {
  let queuedData = [];

  this.$stack = document.querySelector(".queue");
  this.$buttonWrapper = document.querySelector('.queue.button-wrapper');

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
    queuedData = queuedData.concat(
      queuedData.length === 0
        ? 1
        : queuedData[queuedData.length - 1] + 1
    );
    this.queueList.render({
      data: queuedData,
      operation: "enqueue",
    })
  };

  this.dequeueData = () => {
    this.queueList.render({
      data: queuedData,
      operation: "dequeue",
    })
    queuedData = queuedData.slice(1);
  };

  this.initiate();
}