import { AxiosError, AxiosPromise, AxiosResponse } from "axios";

export interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  // shortened syntax for getters with drawbacks in some perticular cases
  // on = this.events.on;
  // trigger = this.events.trigger;
  // get = this.attributes.get;

  set(value: T): void {
    this.attributes.set(value);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") throw new Error("Cannot fetch without id");

    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch((error: AxiosError): void => {
        this.trigger("error");
      });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("change");
      })
      .catch((error: AxiosError): void => {
        this.trigger("error");
      });
  }
}
