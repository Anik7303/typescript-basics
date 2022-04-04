import fs from "fs";
import { DataReader } from "./DataReader";

export class CSVFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}

/* Uses Generics */
// export abstract class CSVFileReader<T> {
//   data: T[] = [];
//   abstract mapRow(row: string[]): T;

//   constructor(public filename: string) {}

//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, { encoding: "utf-8" })
//       .split("\n")
//       .map((row: string): string[] => row.split(","))
//       .map(this.mapRow);
//   }
// }
