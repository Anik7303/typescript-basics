import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string, private deserialize: (json: K) => T) {
    this.fetch = this.fetch.bind(this);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse): void => {
      response.data.forEach((json: K): void => {
        this.models.push(this.deserialize(json));
      });

      this.trigger("change");
    });
  }
}
