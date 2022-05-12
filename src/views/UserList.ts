import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    // itemParent.innerHTML = `
    //   <h2>#${model.get("id")}</p>
    //   <p>name: ${model.get("name")}</p>
    //   <p>age: ${model.get("age")}</p>
    // `;

    new UserShow(itemParent, model).render();
  }
}
