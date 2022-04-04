import { MatchData } from "./MatchData";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string, reportFileName?: string): void;
}

export class Summary {
  constructor(private analyser: Analyser, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyser.run(matches);
    this.outputTarget.print(report);
  }
}
