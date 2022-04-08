import { User } from "./models/User";

const user = new User({ name: "anik", age: 28 });

user.set({ age: 30 });

console.log(user.get("name"), user.get("age"));
