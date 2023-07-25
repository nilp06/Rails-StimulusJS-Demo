import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "list"];
  counter = 1;
  connect() {
    console.log("Welcome", this.element);
  }

  create() {
    const list = this.listTarget;
    const name = document.createElement("p");
    const data = document.createElement("li");
    name.innerText = this.nameTarget.value;
    data.appendChild(name);
    data.setAttribute("id", `name-${this.counter}`);
    const delete_button = document.createElement("button");
    const update_button = document.createElement("button");
    update_button.innerText = "Update";
    delete_button.innerText = "Delete";
    delete_button.setAttribute("data-action", "click->hello#delete");
    delete_button.setAttribute("data-argument-id", `name-${this.counter}`);
    update_button.setAttribute("data-action", "click->hello#update");
    update_button.setAttribute("data-argument-id", `name-${this.counter}`);
    data.appendChild(delete_button);
    data.appendChild(update_button);
    list.appendChild(data);
    this.counter++;
    this.nameTarget.value = "";
  }

  delete(event) {
    const list = this.listTarget;
    const data = document.getElementById(
      `${event.currentTarget.dataset.argumentId}`
    );
    list.removeChild(data);
  }

  update(event) {
    const list = this.listTarget;
    const data = document.getElementById(
      `${event.currentTarget.dataset.argumentId}`
    );
    list.removeChild(data);
    this.nameTarget.value = data.childNodes[0].innerHTML;
  }
}
