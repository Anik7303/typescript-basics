import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.onSetAgeClick = this.onSetAgeClick.bind(this);
    this.onSetNameClick = this.onSetNameClick.bind(this);
    this.onSaveModelClick = this.onSaveModelClick.bind(this);
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveModelClick,
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

  onSaveModelClick(): void {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <div>
          <input placeholder="${this.model.get("name")}" />
          <button class="set-name">Change Name</button>
        </div>
        <div>
          <button class="set-age">Set Random Age</button>
        </div>
        <div>
          <button class="save-model">Save User</button>
        </div>
      </div>
    `;
  }
}
