type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  constructor() {
    this.on = this.on.bind(this);
    this.trigger = this.trigger.bind(this);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    if (!handlers) return;
    handlers.forEach(function (callback: Callback): void {
      callback();
    });
  }

  // Using arrow function
  // on = (eventName: string, callback: Callback): void => {
  //   const handlers: Callback[] = this.events[eventName] || [];
  //   handlers.push(callback);
  //   this.events[eventName] = handlers;
  // };

  // Using arrow function
  // trigger = (eventName: string): void => {
  //   const handlers = this.events[eventName];
  //   if (!handlers || handlers.length === 0) return;
  //   handlers.forEach((callback: Callback): void => {
  //     callback();
  //   });
  // };
}
