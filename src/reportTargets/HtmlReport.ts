import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string, reportFileName?: string): void {
    const html = `<html>
  <head>
    <meta charset="utf-8">
    <title>Report</title>
  </head>
  <body>
    <div>
      <h1>Analysis Output</h1>
      <div>${report}<div>
    </div>
  </body>
</html>`;

    fs.writeFileSync(reportFileName || "report.html", html);
  }
}
