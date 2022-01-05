const { statement } = require('./video-rental')
const { describe, test } = require('jest')
const plays = require('./plays.json')
const invoices = require('./invoices.json')

describe('', () => {
  test('', async () => {
    const result = statement(invoices[0], plays)
    console.log(result)
  })
})
