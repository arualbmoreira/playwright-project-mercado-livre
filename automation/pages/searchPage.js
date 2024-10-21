export class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchField = page.getByPlaceholder("Buscar produtos, marcas e")
    this.seachButton = page.getByRole("button", { name: "Buscar" })
    this.freeShipping = page.getByRole("button", {
      name: "Frete grátis por ser sua",
    })
    this.maxPrice = page.getByTestId("Maximum-price")
    this.MinPrice = page.getByTestId("Minimum-price")
  }

  async fillSearch() {
    const item = "taylor swift cd"
    const search = this.searchField
    await search.fill(item)
  }

  async clickSearch() {
    const buttonSearch = this.seachButton
    await buttonSearch.click()
  }

  async clickFreeShipping() {
    const buttonFreeShipping = this.freeShipping
    await buttonFreeShipping.click()
  }

  async isSearchFieldVisible() {
    const seachInputField = this.searchField
    return await seachInputField.isVisible()
  }
  async isSearchButtonVisible() {
    const searchButton = this.searchField
    return await searchButton.isVisible()
  }
  async fillMinPrice() {
    const minValue = '4000'
    const minPriceField = this.maxPrice
    await minPriceField.click()
    await minPriceField.fill(minValue)
  }
  async fillMaxPrice() {
    const maxValue = '5000'
    const maxPriceField = this.maxPrice
    await maxPriceField.click()
    await maxPriceField.fill(maxValue)
  }

  async fillSearchInvalidWithProduct() {
    const invalidProduct = 'invalidproduct'
    const search = this.searchField
    await search.fill(invalidProduct)


  }
}
