export default class Element {
  constructor({$target, innerText}) {
    this.$target = $target;
    const $newElement = document.createElement("LI");
    this.$newElement = $newElement;
    this.$target.appendChild($newElement);
    this.$newElement.innerText = innerText;
    this.$newElement.className = `list-item`;
  }

  addAnimation() {
    this.$newElement.className = `list-item add`
  }

  popAnimation() {
    this.$newElement.className = `list-item pop`
  }

  dequeueAnimation() {
    this.$newElement.className = `list-item dequeue`

  }

  moveLeftAfterDelay(milliseconds) {
    setTimeout(() => {
      this.$newElement.className = "list-item move-left";
    }, milliseconds);
  }

  removeAfterDelay(milliseconds) {
    setTimeout(() => {
      this.$newElement.remove();
    }, milliseconds);
  }
}


