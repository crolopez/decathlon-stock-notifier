
function isSizeMenuDiv(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('navigation--opened')
}

function isProductDisplay(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('product-display')
}

function isProductDisplayConversionZone(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('product-display__conversion-zone')
}

function isProductSizer(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('js-product-sizer')
}

function isSizesWrapper(node: object): boolean {
  const rawAttrs = (node as any).rawAttrs
  return rawAttrs != undefined &&
    rawAttrs.includes('sizes__wrapper')
}

function getProductList(parsedHTML: HTMLElement): ChildNode[] {
  const time: number = new Date().getTime()

  const root = parsedHTML.childNodes[1]
  const body = Array.from(root.childNodes).filter(x => (x as any).rawTagName == 'body')[0]
  const divs = Array.from(body.childNodes).filter(x => (x as any).rawTagName == 'div')

  // Select the navegation menu in order to select a product version/size
  const sizeMenu = divs.filter(x => isSizeMenuDiv(x))[0]
  // Select the div containing the product display
  const productDisplay = Array.from(sizeMenu.childNodes).filter(x => isProductDisplay(x))[0]
  // Select the conversion zone div
  const productDisplayConversionZone = Array.from(productDisplay.childNodes).filter(x => isProductDisplayConversionZone(x))[0]
  // Select the product sizer div
  const productSizer = Array.from(productDisplayConversionZone.childNodes).filter(x => isProductSizer(x))[0]
  // Select the product sizes wrapper div
  const sizesWrapper = Array.from(productSizer.childNodes).filter(x => isSizesWrapper(x))[0]
  // Select the product list
  const products = Array.from(sizesWrapper.childNodes).filter(x => (x as any).rawTagName == 'ul')[0]
  // Filter the non-product nodes
  const productNodes = Array.from(products.childNodes).filter(x => (x as any).rawTagName == 'li')

  console.log(`HTML scrapped in ${new Date().getTime() - time}ms`)
  return productNodes
}

export { getProductList }
