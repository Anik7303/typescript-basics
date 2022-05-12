import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const url = "http://localhost:3000/users";
const root = document.getElementById("root");

if (root) {
  const collection = new Collection<User, UserProps>(url, User.buildUser);
  collection.fetch();

  const userList = new UserList(root, collection);

  collection.on("change", () => {
    userList.render();
  });
} else {
  throw new Error("Root element not found");
}
