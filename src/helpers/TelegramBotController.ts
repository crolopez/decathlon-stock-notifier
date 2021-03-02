import TeleBot from 'telebot'
import { registerUser, getRegisteredUsers } from './TelegramBotUsers'

let bot: TeleBot
let initDate: Date

function registerBotEvents(): void {
  bot.on('/healthcheck', (msg) => {
    registerUser(`${msg.from.id}`)

    return bot.sendMessage(msg.from.id,
      '<b>//////// BOT HEALTH CHECK ////////</b>\n\n' +
      `<b>Current date:</b> ${new Date()}\n` +
      `<b>Active since:</b> ${initDate}\n`+
      `<b>Product tracked:</b> ${process.env.PRODUCT_URL as string}\n` +
      `<b>Tracked sizes:</b> ${process.env.DESIRED_PRODUCT_SIZES}`,
      { parseMode: 'HTML' })
  })

  bot.on('/start', (msg) => {
    registerUser(`${msg.from.id}`)
  })
}

function initBot(token: string): void {
  initDate = new Date()
  bot = new TeleBot(token)
  registerBotEvents()
  bot.start()
}

function sendMessage(message: string): void {
  console.log(`Sending '${message}' message`)
  getRegisteredUsers().forEach(user => {
    console.log(`Sending to ${user}`)
    bot.sendMessage(user, message, { parseMode: 'HTML' })
  })
}

export { initBot, sendMessage }
