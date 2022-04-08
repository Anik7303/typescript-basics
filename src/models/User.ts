import { Attributes } from "./Attributes";
import { Events } from "./Events";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Events = new Events();
  public sync: Sync<UserProps> = new Sync<UserProps>(
    "http://localhost:3000/users"
  );
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
