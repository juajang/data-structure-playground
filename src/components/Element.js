export default function Element({$target, innerText, animation}) {
  this.$target = $target;

  this.render = () => {
    const $newElement = document.createElement("LI");
    this.$target.appendChild($newElement);
    $newElement.innerText = innerText;
    if (animation) {
      $newElement.className = `list-item ${animation}`;
      setTimeout(() => {
        if (animation === "removed") {
          $newElement.remove();
        }
        $newElement.className = `list-item`;
      }, 250);
    } else {
      $newElement.className = `list-item`;
    }
  };

  this.render();
}