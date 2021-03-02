import HttpClient from './HttpClient'
import { CONFIG } from './config'

async function downloadWebPage(): Promise<string> {
  console.log(`Downloading from ${CONFIG.PRODUCT_URL}`)
  const time: number = new Date().getTime()

  const response: string = await HttpClient.get({
    url: CONFIG.PRODUCT_URL,
    headers: {
      'User-Agent': 'decathlon-stock-notifier',
      'Accept': '*/*',
      'Accept-Encoding': 'identity',
      'Connection': 'Keep-Alive',
    },
  })

  console.log(`File downloaded in ${new Date().getTime() - time}ms`)
  return response
}

export { downloadWebPage }
