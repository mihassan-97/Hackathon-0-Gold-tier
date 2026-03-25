import fs from "fs";

export function log(action, status) {
  const entry = {
    time: new Date().toISOString(),
    action,
    status
  };

  fs.appendFileSync(
    "Vault/Logs/actions.json",
    JSON.stringify(entry) + "\n"
  );
}
