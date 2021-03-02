import { sendMessage } from './TelegramBotController'

function isSizesInfo(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('sizes__info')
}

function isSizesStock(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('sizes__stock')
}

function notifyProductsInStock(products: ChildNode[], productsSize: string[], noStockMessage: string): void {
  const time: number = new Date().getTime()

  products.forEach(node => {
    const productSize: string = Array.from(node.childNodes).filter(x => isSizesInfo(x))[0].textContent?.trim() as string
    const availability: string = Array.from(node.childNodes).filter(x => isSizesStock(x))[0].textContent?.trim() as string

    if (productsSize.includes(productSize) && !availability.includes(noStockMessage)) {
      sendMessage(`\nThere is stock of <i>${productSize}</i>\n<b>${availability} ✅</b>`)
    }
  })

  console.log(`Products processed for notification in ${new Date().getTime() - time}ms`)
}

export { notifyProductsInStock }
