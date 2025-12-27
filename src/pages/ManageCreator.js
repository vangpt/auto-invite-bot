export async function ManageCreator(page) {
  await page.goto(
    "https://affiliate.tiktok.com/connection/creator-management?view_blocked_creator=&shop_region=VN",
    {
      waitUntil: "domcontentloaded",
    }
  );

  await page
    .locator("button", {
      has: page.locator("span", {
        hasText: "Mời hàng loạt",
      }),
    })
    .click();

  await page.locator("div[title='20/Trang']").click();

  await page
    .locator("span.arco-select-option-content-wrapper", {
      hasText: "50/Trang",
    })
    .click();

  await page.locator("thead div.arco-checkbox-mask").click();

  await page
    .getByRole("button", {
      name: "Mời cộng tác",
    })
    .click();
}
