class ArrayOfAnything<T> {
  constructor(private collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// const arr = new ArrayOfAnything<string>(["a", "b", "c", "d"]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const arr = new ArrayOfAnything(["a", "b", "c", "d"]); // This is equivalant to the previous line because of type inference in typescript
