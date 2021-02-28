import HttpClient from './HttpClient'

async function downloadWebPage(url: string): Promise<string> {
  console.log(`Downloading from ${url}`)
  const time: number = new Date().getTime()

  const response: string = await HttpClient.get({
    url: url,
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
