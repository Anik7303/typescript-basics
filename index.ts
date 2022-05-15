class Boat {
  private color = "red";

  get formattedColor(): string {
    return `This boat is colored ${this.color}`;
  }

  @logError
  pilot(): void {
    console.log("swish");
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function logError(target: any, key: string): void {
  console.log({ target, key });
}
