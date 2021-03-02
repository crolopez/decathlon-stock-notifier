import { CronJob } from 'cron'
import { downloadWebPage } from './downloader'
import { parseHTML } from './parser'
import { getProductList } from './scraper'
import { notifyProductsInStock } from './notify'
import { CONFIG } from './config'

async function checkProductStock(): Promise<void> {
  const response: string = await downloadWebPage()

  const parsedHTML: HTMLElement = await parseHTML(response)

  const products = getProductList(parsedHTML)

  notifyProductsInStock(products)
}

function initCronJob(): void {
  const job = new CronJob(`*/${CONFIG.TRACKING_PERIOD} * * * * *`, function() {
    checkProductStock()
  }, null, true, 'America/Los_Angeles')
  job.start()
}

export { initCronJob }
