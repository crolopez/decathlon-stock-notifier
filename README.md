# Decathlon Stock Notifier

Telegram bot to notify product availability at Decathlon using Node.js.

## Prerequisites

The following packages need to be installed in order to deploy and use the service:
- [**Node.js**](https://nodejs.org/)
- [**Yarn**](https://classic.yarnpkg.com/)

## How to deploy

Just execute:

``` bash
yarn install
yarn build
yarn start
```

## Configuration

To configure the bot you have edit the `.env` file, replacing the default values by the desired ones.

| Option | Description |
|-|-|
| PRODUCT_URL | URL of the product which will be monitored |
| DESIRED_PRODUCT_SIZES | The sizes of the product to be monitored, separated by commas |
| NO_STOCK_MESSAGE | The message whose occurrence will determine that the stock is out of stock |

## Use case

Suppose we want to monitor the stock of [these trousers](https://www.decathlon.es/es/p/pantalon-jogger-ligero-fitness-corte-recto-negro/_/R-p-325948?mc=8588922&c=NEGRO) in sizes 2XL and 3XL.

![imagen](https://user-images.githubusercontent.com/20266121/109428418-5ed78e00-79f7-11eb-906b-9c292c8af04c.png)

This content of the `.env` file should be:

``` bash
PRODUCT_URL=https://www.decathlon.es/es/p/pantalon-jogger-ligero-fitness-corte-recto-negro/_/R-p-325948?mc=8588922&c=NEGRO
DESIRED_PRODUCT_SIZES=2XL / W38 L31,3XL / W41 L31
NO_STOCK_MESSAGE=QUEDAN 0
```

## Limitation

The bot is only able to track products of a single color, or the first color of each one.

To remove this limitation, it is necessary to improve the scrapper.
