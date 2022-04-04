import { WinsAnalysis } from "./Analysers";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets";

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

  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }
}
