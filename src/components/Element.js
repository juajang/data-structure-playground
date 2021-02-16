export default function Element({$target, innerText, animation }) {
  this.$target = $target;

  this.render = () => {
    const $newElement = document.createElement("LI");
    this.$target.appendChild($newElement);
    $newElement.innerText = innerText;

    if (animation) {
      if (animation !== 'move-left') {
        $newElement.className = `list-item ${animation}`;
      } else {
        $newElement.className = `list-item`;
      }

      // remove element after animation
      setTimeout(() => {
        if (animation === "pop") {
          $newElement.remove();
        }
      }, 250);

      setTimeout(() => {
        if (animation === "move-left") {
          $newElement.className = "list-item move-left";
        }
      }, 300);

      setTimeout(() => {
        if (animation === "dequeue") {
          $newElement.remove();
        }
      }, 600);

    } else {
      $newElement.className = `list-item`;
    }
  };

  this.render();
}