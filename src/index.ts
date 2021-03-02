import { config } from 'dotenv'
import { downloadWebPage } from './helpers/Downloader'
import { parseHTML } from './helpers/Parser'
import { getProductList } from './helpers/Scraper'
import { notifyProductsInStock } from './helpers/Notify'
import { initBot } from './helpers/TelegramBotController'

config()
const PRODUCT_URL = process.env.PRODUCT_URL as string
const DESIRED_PRODUCT_SIZES = (process.env.DESIRED_PRODUCT_SIZES as string).split(',')
const NO_STOCK_MESSAGE = process.env.NO_STOCK_MESSAGE as string
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string

async function main(): Promise<void> {
  const response: string = await downloadWebPage(PRODUCT_URL)

  const parsedHTML: HTMLElement = await parseHTML(response)

  const products = getProductList(parsedHTML)

  notifyProductsInStock(products, DESIRED_PRODUCT_SIZES, NO_STOCK_MESSAGE)
}

initBot(TELEGRAM_BOT_TOKEN)
main()
