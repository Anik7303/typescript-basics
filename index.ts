class Boat {
  private color = "red";

  get formattedColor(): string {
    return `This boat is colored ${this.color}`;
  }

  @logError("Oops, the boat sunk in ocean")
  pilot(): void {
    throw new Error();
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function logError(message: string): Function {
  return function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any,
    key: string,
    desc: PropertyDescriptor
  ): void {
    console.log({ target, key, desc });
    const method = desc.value;

    desc.value = function (): void {
      try {
        method();
      } catch (e) {
        console.error(message);
      }
    };
  };
}

new Boat().pilot();
