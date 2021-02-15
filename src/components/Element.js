export default function Element({ $target, innerText, animation }) {
  this.$target = $target;

  this.render = () => {
    const $newElement = document.createElement("LI");
    this.$target.appendChild($newElement);
    $newElement.innerText = innerText;
    $newElement.className = "stack-item";
  };

  this.render();
}