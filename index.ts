class Boat {
  private color = "red";

  get formattedColor(): string {
    return `This boat is colored ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log({ target, key, desc });
  const method = desc.value;

  desc.value = function (): void {
    try {
      method();
    } catch (e) {
      console.error(e);
    }
  };
}

new Boat().pilot();
