import { parse } from 'node-html-parser'

async function parseHTML(html: string): Promise<HTMLElement> {
  const time: number = new Date().getTime()

  const parsedHTML: any = parse(html)

  console.log(`HTML parsed in ${new Date().getTime() - time}ms`)
  return parsedHTML
}

export { parseHTML }
