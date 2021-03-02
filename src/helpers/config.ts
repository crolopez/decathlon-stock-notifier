import { config } from 'dotenv'

config()

const CONFIG = {
  PRODUCT_URL: process.env.PRODUCT_URL as string,
  DESIRED_PRODUCT_SIZES: (process.env.DESIRED_PRODUCT_SIZES as string).split(','),
  NO_STOCK_MESSAGE: process.env.NO_STOCK_MESSAGE as string,
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN as string,
  TRACKING_PERIOD: process.env.TRACKING_PERIOD as unknown as number,
  NOTIFICATION_DELAY: process.env.NOTIFICATION_DELAY as unknown as number,
}

export { CONFIG }
