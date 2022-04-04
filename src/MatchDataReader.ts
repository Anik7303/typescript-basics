import { MatchResult } from "./MatchResult";
import { CSVFileReader } from "./CSVFileReader";
import { dateStringtoDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchDataReader extends CSVFileReader<MatchData> {
  constructor(filename: string) {
    super(filename);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringtoDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
