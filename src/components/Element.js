export default function Element({ $target, innerText }) {
  this.$target = $target;

  this.render = () => {
    const $newElement = document.createElement("LI");
    this.$target.appendChild($newElement);
    $newElement.innerText = innerText;
  };

  this.render();
}