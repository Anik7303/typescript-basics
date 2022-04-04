import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { DataReader } from "./DataReader";
import { dateStringtoDate } from "./utils";
import { CSVFileReader } from "./CSVFileReader";

export class MatchDataReader {
  matches: MatchData[] = [];

  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }

  static fromCSV(filename: string): MatchDataReader {
    return new MatchDataReader(new CSVFileReader(filename));
  }
}

/* Uses Generics */
// export class MatchDataReader extends CSVFileReader<MatchData> {
//   mapRow(row: string[]): MatchData {
//     return [
//       dateStringtoDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MatchResult,
//       row[6],
//     ];
//   }
// }
