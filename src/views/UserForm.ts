import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.onSetAgeClick = this.onSetAgeClick.bind(this);
    this.onSetNameClick = this.onSetNameClick.bind(this);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetNameClick(): void {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onSetAgeClick(): void {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <h2>User Form</h2>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <div>
          <input />
          <button class="set-name">Change Name</button>
        </div>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}
