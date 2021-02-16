export default function Form({$target, submitButtonName, onSubmit, formName, label}) {
  this.render = () => {
    this.$target = $target;

    this.$form = document.createElement("FORM");
    this.$target.appendChild(this.$form);

    this.$label = document.createElement('LABEL');
    this.$form.appendChild(this.$label);
    this.$label.htmlFor = "formName";
    this.$label.innerText = label;

    this.$input = document.createElement('INPUT');
    this.$form.appendChild(this.$input);
    this.$input.className="linked-list"
    this.$input.type = "text";
    this.$input.name = formName;
    this.$input.id = formName;

    this.$button = document.createElement('BUTTON');
    this.$form.appendChild(this.$button);
    this.$button.type = "submit";
    this.$button.innerText = submitButtonName;
  };

  this.addSubmitEvent = () => {
    this.$button.addEventListener("click", (e) => {
      e.preventDefault();
      onSubmit();
    });
  }

  this.render();
  this.addSubmitEvent();
}