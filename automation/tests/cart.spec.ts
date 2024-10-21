import { test } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
import { SearchPage } from "../pages/searchPage";
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.mercadolivre.com.br/')
})

test.describe("Testing the cart page",  () => {
  test("Adding product on cart", async ({ page }) => {
    const searchPage = new SearchPage(page)
    await searchPage.fillSearch()
    await searchPage.clickSearch()

    const cartPage = new CartPage(page)
    await cartPage.clickProduct()
    await cartPage.clickAddCart()
  })
 test("Adding more than one product on cart", async ({ page }) => {
    const searchPage = new SearchPage(page)
    await searchPage.fillSearch()
    await searchPage.clickSearch()

    const cartPage = new CartPage(page)
    await cartPage.clickProduct()
    await cartPage.clickAddQnty()
    await cartPage.clickAddCart()
  })

})
