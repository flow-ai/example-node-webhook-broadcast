const cron = require('node-cron')
cron.schedule(process.env.CRON_SCHEDULE, require('./jobs/broadcast'))

module.exports = cron
