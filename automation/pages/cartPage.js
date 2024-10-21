export class CartPage {
  constructor(page) {
    this.page = page;
    this.selectItem = page.getByRole('link', { name: 'Taylor Swift - Swift Taylor (' })
    this.buttonBuyNow = page.getByRole('button', { name: 'Comprar agora' })
    this.buttonAddCart = page.getByRole('button', { name: 'Adicionar ao carrinho' })
    this.selectQuantity = page.getByRole('button', { name: 'Quantidade: 1 unidade (+5' })
    this.selectTwoQnty = page.getByRole('button', { name: '2 unidades' })
  }

  async clickProduct() {
    const itemSelected = this.selectItem
    await itemSelected.click()
  }

  async clickBuyNow(){
    const buyNowButton = this.buttonBuyNow
    await buyNowButton.click()
  }

  async clickAddCart(){
    const addCartButton = this.buttonAddCart
    await addCartButton.click()

  }

  async clickAddQnty(){
    const addQnty = this.selectQuantity
    const twoQnty = this.selectTwoQnty
    await addQnty.click()
    await twoQnty.click()

  }
  
}
