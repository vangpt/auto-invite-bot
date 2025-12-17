import {
  chromium
} from "playwright";
import path from "path";
import {
  fileURLToPath
} from "url";

import {
  BUTTON_INVITE_CREATOR_SELECTOR,
  SCROLL_CONTAINER_SELECTOR,
  MAX_CREATORS
} from "./src/constants/index.js";

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

const userDataDir = path.join(__dirname, "chrome-profile-tool");

const chromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const browser = await chromium.launchPersistentContext(userDataDir, {
    viewport: {
      width: 1920,
      height: 1080
    },
    headless: false,
    executablePath: chromePath,
    args: ["--no-first-run", "--no-default-browser-check", ],

  })

  const page = await browser.newPage();


  await page.goto(
    "https://affiliate.tiktok.com/connection/target-invitation/create?creator_ids[0]=7494007232910755382&creator_ids[1]=7494076501915109141", {
      waitUntil: "domcontentloaded",
    }
  );

  // await page.getByPlaceholder('Tên lời mời').fill('abc');
  // await page.getByPlaceholder('Ngày kết thúc').click();
  // await page.locator('div.arco-picker-date-value', {
  //   hasText: '30'
  // }).click();


  // await page.locator('div.arco-typography', {
  //   hasText: 'Chọn sản phẩm'
  // }).click();

  // await page.getByRole('button', {
  //   name: 'Thêm sản phẩm'
  // }).click();

  // await page.locator('div[title="Tên sản phẩm"]').click();

  // await page.locator('li', {
  //   hasText: 'ID sản phẩm'
  // }).click();

  // await page.getByRole('textbox', {
  //   name: 'Tìm kiếm sản phẩm'
  // }).fill('1731178131058494136');

  // await page.locator('svg.arco-icon-search').click();

  // await page.locator('td div.arco-checkbox-mask').last().click();

  // await page.getByRole('button', {
  //   name: 'Thêm',
  //   exact: true
  // }).click();

  // await page.getByRole('spinbutton', {
  //   name: '1.00-80.00'
  // }).fill('12');

  // await page.locator('button.arco-switch.arco-switch-type-circle[role="switch"]').first().click();

  // await page.getByRole('spinbutton', {
  //   name: '1.00-80.00'
  // }).last().fill('4');

  // await page.locator('div.arco-typography', {
  //   hasText: 'Cài đặt mẫu miễn phí'
  // }).click();

  // await page.locator('div.text-head-s.text-neutral-text1', {
  //   hasText: 'Xét duyệt thủ công yêu cầu'
  // }).click();

  // await page.getByRole('button', {
  //   name: 'Gửi',
  //   exact: true
  // }).click();












  // await page.goto(
  //   "https://affiliate.tiktok.com/connection/creator?shop_region=VN", {
  //     waitUntil: "domcontentloaded",
  //   }
  // );

  // await page.waitForSelector(SCROLL_CONTAINER_SELECTOR, {
  //   timeout: 15000
  // });

  // let count = await page.$$eval(BUTTON_INVITE_CREATOR_SELECTOR, (els) => els.length);

  // while (count < MAX_CREATORS) {
  //   // Scroll the container
  //   await page.evaluate((selector) => {
  //     const container = document.querySelector(selector);
  //     if (container) {
  //       container.scrollBy(0, 1000); // Scroll down by 500px
  //     }
  //   }, SCROLL_CONTAINER_SELECTOR);

  //   // Wait for 2 seconds before rechecking
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  //   // Recheck the button count
  //   count = await page.$$eval(BUTTON_INVITE_CREATOR_SELECTOR, (els) => els.length);
  //   console.log(`Found ${count} creator`);
  // }

  // if (count >= MAX_CREATORS) {
  //   for (let i = 0; i < count; i++) {
  //     console.log(`Invite creator ${i + 1}...`);
  //     await page.$$eval(BUTTON_INVITE_CREATOR_SELECTOR, (els, index) => {
  //       els[index].click();
  //     }, i);

  //     // Wait for a short delay after each click
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //   }
  //   await page.goto(
  //     "https://affiliate.tiktok.com/connection/creator-management?view_blocked_creator=&shop_region=VN", {
  //       waitUntil: "domcontentloaded",
  //     }
  //   );
  // }

  // await page.goto(
  //   "https://affiliate.tiktok.com/connection/creator-management?view_blocked_creator=&shop_region=VN", {
  //     waitUntil: "domcontentloaded",
  //   }
  // );

  // await page.locator('button', {
  //   has: page.locator('span', {
  //     hasText: 'Mời hàng loạt'
  //   })
  // }).click();

  // await page.locator('thead div.arco-checkbox-mask').click();

  // await page.getByRole('button', {
  //   name: 'Mời cộng tác'
  // }).click();

  console.log("Kết thúc vòng tìm nút, giữ Chrome mở cho bạn xem.");
  await page.waitForTimeout(60 * 60 * 1000);
})();