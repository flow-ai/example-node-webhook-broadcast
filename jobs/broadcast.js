const debug = require('debug')('webhook:handlers:scheduled'),
      Subscriber = require('../models/subscriber'),
      request = require('request-promise')
module.exports = async () => {

  const subscribers = await Subscriber.find()

  if(!subscribers || !subscribers.length) {
    console.log(`No subscribers found`)
    return
  }
   
  for (let x = 0; x < subscribers.length; x++) {
    const {
      replyUrl,
      fullName,
      firstName,
      lastName,
      locale
    } = subscribers[x]
    
    debug('Sending message to subscriber')

    await request({
      url: replyUrl,
      method: 'POST',
      json: true,
      body: {
        verifyToken: process.env.VERIFY_TOKEN,
        events: [
          'SCHEDULED_DAILY_EVENT'
        ],
        originator: {
          name: fullName,
          profile: {
            fullName: fullName || 'Anonymous',
            firstName: firstName,
            lastName: lastName,
            locale: locale
          }
        }
      }
    })
  }
}
