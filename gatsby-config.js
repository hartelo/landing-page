require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { generateConfig } = require("gatsby-plugin-ts-config")
module.exports = generateConfig()
