import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.on("change", (): void => {
  console.log(collection);
});

collection.fetch();
