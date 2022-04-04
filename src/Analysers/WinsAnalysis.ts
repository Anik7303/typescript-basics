import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyser } from "../Summary";

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0,
      loses = 0,
      draws = 0;

    for (let match of matches) {
      if (
        (match[1] === this.teamName && match[5] === MatchResult.HOME_WIN) ||
        (match[2] === this.teamName && match[5] === MatchResult.AWAY_WIN)
      ) {
        wins++;
      } else if (
        (match[1] === this.teamName && match[5] === MatchResult.AWAY_WIN) ||
        (match[2] === this.teamName && match[5] === MatchResult.HOME_WIN)
      ) {
        loses++;
      } else if (
        match[5] === MatchResult.DRAW &&
        (match[1] === this.teamName || match[2] === this.teamName)
      ) {
        draws++;
      }
    }

    const totalMatches = wins + loses + draws;
    return `${this.teamName} won ${wins} matches.
    ${this.teamName} lost ${loses} matches.
    ${this.teamName} played ${totalMatches} matches.`;
  }
}
