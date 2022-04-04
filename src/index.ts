import { WinsAnalysis } from "./Analysers";
import { CSVFileReader } from "./CSVFileReader";
import { MatchDataReader } from "./MatchDataReader";
import { ConsoleReport, HtmlReport } from "./reportTargets";
import { Summary } from "./Summary";

const csvFileReader = new CSVFileReader("football.csv");

const matchDataReader = new MatchDataReader(csvFileReader);
matchDataReader.load();

// const summary = new Summary(new WinsAnalysis("Arsenal"), new ConsoleReport());
const summary = new Summary(new WinsAnalysis("Arsenal"), new HtmlReport());
summary.buildAndPrintReport(matchDataReader.matches);
