const debug = require('debug')('webhook:routes:index'),
      express = require('express'),
      router = express.Router(),
      Subscriber = require('../models/subscriber')

/* GET /. */
router.get('/', (req, res, next) => {
  res.json({
    status: 'ok'
  })
  next()
})

/* POST /. */
router.post('/', async (req, res) => {

  debug('Received a new POST request', req.body)

  const {
    threadId,
    action,
    verifyToken,
    replyUrl,
    user
  } = req.body

  if(verifyToken !== process.env.VERIFY_TOKEN) {
    console.error('Request verifyToken did not match ours')
    res.send(400)
    return
  }


  switch(action) {
    case 'OPTIN_DAILY_UPDATE': {
      debug('Subscribing new user', user)
      if(!user.profile) {
        // Profile might be empty
        // so we do this to make life easier
        user.profile = {}
      }
      const subscriber = new Subscriber({
        subscriberId: threadId,
        replyUrl,
        fullName: user.profile.fullName || user.name,
        firstName: user.profile.firstName || '',
        lastName: user.profile.lastName || '',
        locale: user.profile.locale || ''
      })
      await subscriber.save()
      break
    }
    case 'OPTOUT_DAILY_UPDATE': {
      debug('Unsubscribing user')
      await Subscriber.findAndDelete({
        subscriberId: threadId
      })
      break
    }
  }
  
  res.sendStatus(200)
})

module.exports = router
