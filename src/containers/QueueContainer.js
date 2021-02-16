import Button from '../components/Button.js';
import QueueList from "../components/QueueList.js";
import Queue from "../dataStructure/Queue.js";

export default function QueueContainer() {
  this.$queueContainer = document.querySelector(".queue");
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
    this.queue = new Queue();
    this.queueList = new QueueList({ $target: this.$queueContainer });
  }

  this.enqueueData = () => {
    const currentData = this.queue.getData();
    this.queue.enqueue(
      currentData.length === 0
        ? 1
        : currentData[currentData.length - 1] + 1
    );
    this.queueList.render({
      data: this.queue.getData(),
      operation: "enqueue",
    })
  };

  this.dequeueData = () => {
    this.queueList.render({
      data: this.queue.getData(),
      operation: "dequeue",
    })
    this.queue.dequeue();
  };

  this.initiate();
}