import { MatchDataReader } from "./MatchDataReader";
import { Summary } from "./Summary";

const matchDataReader = MatchDataReader.fromCSV("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Tottenham");

matchDataReader.load();
summary.buildAndPrintReport(matchDataReader.matches);
