import {
  test as base,
  expect,
  Page
} from "@playwright/test";

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({

  authenticatedPage: async ({ page }, use) => {

    await page.goto(process.env.ERP_DOCUMENTS_URL!);

    await page.waitForLoadState("networkidle");

    await use(page);

  }

});

export { expect };