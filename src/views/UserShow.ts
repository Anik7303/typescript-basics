import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h2>User Data</h2>
        <p>name: ${this.model.get("name")}</p>
        <p>age: ${this.model.get("age")}</p>
      </div>
    `;
  }
}
