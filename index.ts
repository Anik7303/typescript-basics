@classDecorator
class Boat {
  @testDecorator
  private color = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat is colored ${this.color}`;
  }

  @logError("Oops, the boat sank in ocean")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classDecorator(constructor: typeof Boat): void {
  console.log(constructor);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parameterDecorator(target: any, key: string, index: number): void {
  console.log({ target, key, index });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function testDecorator(target: any, key: string): void {
  console.log({ target, key });
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
