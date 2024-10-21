import { expect, test } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.mercadolivre.com.br/");
})

test.describe("Search page", () => {
  test("Verifying if search field and button are visible", async ({page}) => {
    const searchPage = new SearchPage(page)

    const searchFieldIsVisible = await searchPage.isSearchFieldVisible();
    expect(searchFieldIsVisible).toBe(true)

    const buttonSearchIsVisible = await searchPage.isSearchButtonVisible();
    expect(buttonSearchIsVisible).toBe(true)
  })
  test("Doing a search of product", async ({page}) => {
    const searchPage = new SearchPage(page)
    await searchPage.fillSearch()
    await searchPage.clickSearch()
  })

  test("Using the filters of product page", async ({page}) => {
    const searchPage = new SearchPage(page)
    await searchPage.fillSearch()
    await searchPage.clickSearch()
    await searchPage.clickFreeShipping()
    await searchPage.fillMinPrice()
    await searchPage.fillMaxPrice()
  })

  test("Searching a invalid product", async ({page}) => {
    const searchPage = new SearchPage(page)
    await searchPage.fillSearchInvalidWithProduct()
  })
})
