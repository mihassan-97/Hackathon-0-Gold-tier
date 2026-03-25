import cron from "node-cron";
import fs from "fs";

cron.schedule("0 9 * * 1", () => {

  let completed = 0;

  if (fs.existsSync("Vault/Business/Done")) {
    completed = fs.readdirSync("Vault/Business/Done").length;
  }

  const report = `
# Monday Morning CEO Briefing

Completed Tasks: ${completed}
Revenue: TBD
Bottlenecks: None
Optimization: Automate approvals

Generated: ${new Date().toISOString()}
`;

  fs.writeFileSync(
    "Vault/Briefings/Monday_CEO.md",
    report
  );

  console.log("CEO Briefing Generated");
});

console.log("Weekly Audit Running...");
