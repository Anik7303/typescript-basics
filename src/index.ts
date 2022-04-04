import { MatchDataReader } from "./MatchDataReader";
import { MatchResult } from "./MatchResult";

const matchData = new MatchDataReader("football.csv");
matchData.read();

let manUnitedWin = 0;
let manUnitedLose = 0;
let manUnitedDraw = 0;

for (let match of matchData.data) {
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
