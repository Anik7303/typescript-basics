import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-7, 2, 0, -3, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaaaa");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(-7);
linkedList.add(2);
linkedList.add(0);
linkedList.add(-3);
linkedList.add(10);

linkedList.sort();
linkedList.print();
