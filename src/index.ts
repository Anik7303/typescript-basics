import { CSVFileReader } from "./CSVFileReader";
import { MatchDataReader } from "./MatchDataReader";
import { MatchResult } from "./MatchResult";

// For code with interface
const csvFileReader = new CSVFileReader("football.csv");

const matchDataReader = new MatchDataReader(csvFileReader);
matchDataReader.load();

// For code with Generics
// const matchData = new MatchDataReader("football.csv");
// matchData.read();

let manUnitedWin = 0;
let manUnitedLose = 0;
let manUnitedDraw = 0;

// For code with Generics
// for (let match of matchData.data) {
// For code with interface
for (let match of matchDataReader.matches) {
  if (
    (match[1] === "Man United" && match[5] === MatchResult.HOME_WIN) ||
    (match[2] === "Man United" && match[5] === MatchResult.AWAY_WIN)
  ) {
    manUnitedWin++;
  } else if (
    (match[1] === "Man United" && match[5] === MatchResult.AWAY_WIN) ||
    (match[2] === "Man United" && match[5] === MatchResult.HOME_WIN)
  ) {
    manUnitedLose++;
  } else if (
    match[5] === MatchResult.DRAW &&
    (match[1] === "Man United" || match[2] === "Man United")
  ) {
    manUnitedDraw++;
  }
}

console.log({
  manUnitedWin,
  manUnitedLose,
  manUnitedDraw,
  manUnitedTotalMatches: manUnitedWin + manUnitedLose + manUnitedDraw,
});
