const mongoose = require('mongoose'),
      Schema = mongoose.Schema

const SubscriberSchema = new Schema({
  subscriberId: { type: String, required: true, index: true },
  replyUrl: { type: String, required: true },
  fullName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  locale: { type: String },
  createdAt: { type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model('Subscriber', SubscriberSchema)
