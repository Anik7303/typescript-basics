class LinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: LinkedListNode | null = null;

  get length(): number {
    let count = 0;

    let tail = this.head;
    while (tail) {
      count++;
      tail = tail.next;
    }

    return count;
  }

  add(data: number): void {
    const node = new LinkedListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  at(index: number): LinkedListNode {
    let counter = 0;

    let node: LinkedListNode | null = this.head;
    while (node) {
      if (counter === index) return node;

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error("list is empty");
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error("list is empty");

    const leftHand = this.at(leftIndex);
    const rightHand = this.at(rightIndex);

    let temp = leftHand.data;
    leftHand.data = rightHand.data;
    rightHand.data = temp;
  }

  print(): void {
    if (!this.head) return;

    let node: LinkedListNode | null = this.head;
    while (node) {
      console.log(node.data);

      node = node.next;
    }
  }
}
