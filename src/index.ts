class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

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
}

const arr = new Sorter([7, 2, 0, -3]);
arr.sort();
console.log(arr.collection);
