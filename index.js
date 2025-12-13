import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

// Đoạn này chỉ để tính đường dẫn tuyệt đối tới folder profile trong project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tạo folder profile riêng cho tool
const userDataDir = path.join(__dirname, "chrome-profile-tool");

// Dùng Chrome thật
const chromePath =
 "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
 const browser = await chromium.launchPersistentContext(userDataDir, {
   headless: false,
   executablePath: chromePath,
   args: ["--no-first-run", "--no-default-browser-check"],
 });

 const page = await browser.newPage();
 await page.goto(
   "https://affiliate.tiktok.com/connection/creator?shop_region=VN",
   {
     waitUntil: "domcontentloaded",
   }
 );

//  const buttonSelector =
//    ".arco-btn.arco-btn-secondary.arco-btn-size-default.arco-btn-shape-square.arco-btn-icon-only";

//  // Div scroll bạn nói: id="scroll-container"
//  const scrollContainerSelector = "#scroll-container";

//  // Đợi container xuất hiện
//  await page.waitForSelector(scrollContainerSelector, { timeout: 15000 });
//  console.log("Đã thấy #scroll-container");

//  const targetCount = 50;
//  let iteration = 0;

//  while (true) {
//    iteration++;

//    // Đếm hiện tại có bao nhiêu nút
//    const count = await page.$$eval(buttonSelector, (els) => els.length);
//    console.log(`Vòng ${iteration} – hiện có ${count} nút`);

//    if (count >= targetCount) {
//      console.log(`Đã tìm đủ ${targetCount} nút, dừng scroll.`);
//      break;
//    }

//    // Scroll trong div #scroll-container
//    const canScrollMore = await page.evaluate((containerSel) => {
//      const el = document.querySelector(containerSel);
//      if (!el) return false;

//      const before = el.scrollTop;
//      el.scrollTop = el.scrollHeight; // kéo xuống cuối

//      // nếu scrollTop không đổi -> đang ở đáy, hết chỗ để scroll
//      return el.scrollTop !== before;
//    }, scrollContainerSelector);

//    console.log("Đã scroll trong #scroll-container…");

//    // Chờ trang load thêm nội dung (lazy load, API, v.v.)
//    await page.waitForTimeout(1500);

//    if (!canScrollMore) {
//      console.log(
//        "Scroll nhưng scrollTop không đổi -> đã ở đáy, không load thêm nội dung. Dừng."
//      );
//      break;
//    }

//    // Chống vòng lặp vô hạn
//    if (iteration > 50) {
//      console.log("Quá 50 vòng mà chưa đủ 50 nút, dừng để tránh chạy vô hạn.");
//      break;
//    }
//  }

 console.log("Xong phase scan + scroll. Giữ browser mở cho bạn xem.");

 console.log("Kết thúc vòng tìm nút, giữ Chrome mở cho bạn xem.");
 await page.waitForTimeout(60 * 60 * 1000);
})();

