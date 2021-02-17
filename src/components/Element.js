export class Element {
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

export class LinkedListElement extends Element {
  constructor(props) {
    super(props);

    if (props.isClicked === true) {
      this.$newElement.className = "list-item linked-list clicked"
    } else {
      this.$newElement.className = "list-item linked-list"
    }

    this.$newElement.addEventListener("click", () => {
      props.setCurrentIndex(props.index);
    })
  }

}
