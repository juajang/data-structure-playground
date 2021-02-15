export default function Button({$target, innerText, onClick}) {
  this.render = () => {
    const $button = document.createElement("BUTTON");
    this.$button = $button;
    $target.appendChild($button);
    $button.className = "button";
    $button.innerText = innerText;
  };

  this.addClickEvent = () => {
    this.$button.addEventListener("click", onClick);
  }

  this.render();
  this.addClickEvent();
}