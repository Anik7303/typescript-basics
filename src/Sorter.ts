export class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    // All of this only works if collection is number[]
    // type guard
    if (this.collection instanceof Array) {
      for (let i = 0; i < length - 1; i++) {
        let lim = length - i - 1;
        for (let j = 0; j < lim; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            let temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }

    // Only going to work if collection is a string
    // If collection is a string, do this logic instead;
    // ~~~ logic to compare and swap characters in a string
    // type guard
    if (typeof this.collection === "string") {
    }
  }
}
