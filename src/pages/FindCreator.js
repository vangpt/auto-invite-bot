import {
  BUTTON_INVITE_CREATOR_SELECTOR,
  SCROLL_CONTAINER_SELECTOR,
  MAX_CREATORS,
  MIN_FOLLOWERS,
} from "../constants/index.js";

export async function FindCreator(page) {
  await page.goto(
    "https://affiliate.tiktok.com/connection/creator?shop_region=VN",
    {
      waitUntil: "domcontentloaded",
    }
  );

  await page
    .locator("div.arco-typography", {
      hasText: "Hạng mục sản phẩm",
    })
    .click();

  await page.locator("li[title='Đồ ăn & Đồ uống'] span").click();

  await page
    .locator("div.inline-block", {
      hasText: "Chưa mời trong 90 ngày qua",
    })
    .click();

  await page
    .locator(
      "button.arco-btn.arco-btn-secondary.arco-btn-size-default.arco-btn-shape-square.m4b-button.text-body-m-regular",
      {
        hasText: "Người theo dõi",
      }
    )
    .click();

  await page
    .locator("div.arco-typography", {
      hasText: "Tổng số người theo dõi",
    })
    .click();

  await page.locator('input[autocomplete="off"]').first().fill(MIN_FOLLOWERS);

  await page
    .locator("div.arco-typography", {
      hasText: "Tổng số người theo dõi",
    })
    .click();

  await page.waitForSelector(SCROLL_CONTAINER_SELECTOR, {
    timeout: 15000,
  });

  let count = await page.$$eval(
    BUTTON_INVITE_CREATOR_SELECTOR,
    (els) => els.length
  );

  while (count < MAX_CREATORS) {
    // Scroll the container
    await page.evaluate((selector) => {
      const container = document.querySelector(selector);
      if (container) {
        container.scrollBy(0, 1000); // Scroll down by 500px
      }
    }, SCROLL_CONTAINER_SELECTOR);
    // Wait for 2 seconds before rechecking
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Recheck the button count
    count = await page.$$eval(
      BUTTON_INVITE_CREATOR_SELECTOR,
      (els) => els.length
    );
    console.log(`Found ${count} creator`);
  }

  if (count >= MAX_CREATORS) {
    for (let i = 0; i < MAX_CREATORS; i++) {
      console.log(`Invite creator ${i + 1}...`);
      await page.$$eval(
        BUTTON_INVITE_CREATOR_SELECTOR,
        (els, index) => {
          els[index].click();
        },
        i
      );
      // Wait for a short delay after each click
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
