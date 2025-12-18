import {
  ID_PRODUCT,
  TITLE_INVITE_CREATOR,
  DATE_END_INVITE_CREATOR,
  STANDARD_COMMISSION_RATE,
  SHOP_COMMISSION_RATE,
} from "../constants/index.js";

export async function inviteCreator(page) {
  // step 1
  await page.getByPlaceholder("Tên lời mời").fill(TITLE_INVITE_CREATOR);

  await page.getByPlaceholder("Ngày kết thúc").click();

  await page
    .locator("div.arco-picker-date-value", {
      hasText: DATE_END_INVITE_CREATOR,
    })
    .click();

  // step 2

  await page
    .locator("div.arco-typography", {
      hasText: "Chọn sản phẩm",
    })
    .click();

  await page
    .getByRole("button", {
      name: "Thêm sản phẩm",
    })
    .click();

  await page.locator('div[title="Tên sản phẩm"]').click();

  await page
    .locator("li", {
      hasText: "ID sản phẩm",
    })
    .click();

  await page
    .getByRole("textbox", {
      name: "Tìm kiếm sản phẩm",
    })
    .fill(ID_PRODUCT);

  await page.locator("svg.arco-icon-search").click();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page.locator("td div.arco-checkbox-mask").last().click();

  await page
    .getByRole("button", {
      name: "Thêm",
      exact: true,
    })
    .click();

  await page
    .getByRole("spinbutton", {
      name: "1.00-80.00",
    })
    .fill(STANDARD_COMMISSION_RATE);

  await page
    .locator('button.arco-switch.arco-switch-type-circle[role="switch"]')
    .first()
    .click();

  await page
    .getByRole("spinbutton", {
      name: "1.00-80.00",
    })
    .last()
    .fill(SHOP_COMMISSION_RATE);

  // step 3

  await page
    .locator("div.arco-typography", {
      hasText: "Cài đặt mẫu miễn phí",
    })
    .click();

  await page
    .locator("div.text-head-s.text-neutral-text1", {
      hasText: "Xét duyệt thủ công yêu cầu",
    })
    .click();

  await page
    .getByRole("button", {
      name: "Gửi",
      exact: true,
    })
    .click();

  await page.locator("div[title='Đã gửi lời mời cộng tác!']").waitFor();

  console.log("Invite successfully!");
}
