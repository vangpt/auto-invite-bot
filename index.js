import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

import { FindCreator } from "./src/pages/FindCreator.js";
import { ManageCreator } from "./src/pages/ManageCreator.js";
import { InviteCreator } from "./src/pages/InviteCreator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userDataDir = path.join(__dirname, "chrome-profile-tool");

const chromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const browser = await chromium.launchPersistentContext(userDataDir, {
    viewport: {
      width: 1620,
      height: 880,
    },
    headless: false,
    executablePath: chromePath,
    args: ["--no-first-run", "--no-default-browser-check"],
  });

  const page = await browser.newPage();

  while (true) {
    await FindCreator(page);
    await ManageCreator(page);
    await InviteCreator(page);
  }
})();
