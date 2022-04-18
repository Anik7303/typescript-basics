import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public url: string) {
    this.fetch = this.fetch.bind(this);
    this.save = this.save.bind(this);
  }

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (id) return axios.put(`${this.url}/${id}`, data);

    return axios.post(this.url, data);
  }
}
