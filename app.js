const express = require('express'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan')

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', require('./routes/index'))

module.exports = app
