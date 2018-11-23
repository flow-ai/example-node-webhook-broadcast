# Flow.ai Node.js Webhook Broadcast Example

This example project is created using Nodejs and Express. It demonstrates an easy way to store subscribers and broadcast a message each day using a cron worker. 

## Prerequirements
- You'll need a [Flow.ai](https://app.flow.ai) project
- [Heroku](https://heroku.com) account

## Getting started

### 1. Deploy the webhook
- Go to the [Flow.ai dashboard](https://app.flow.ai)
- Select actions and create a new Webhook action
- Copy and paste the *verify token*
- [Deploy the project to Heroku](https://heroku.com/deploy?template=https://github.com/flow-ai/example-node-webhook-broadcast) and paste the *verify token*

### 2. Create flows
- Go to the [Flow.ai dashboard](https://app.flow.ai)
- Select flows and create a new flow
- Add a text trigger with the text *subscribe now*
- Drag and drop a new reply action and select the webhook action created in step 1. Enter as action `OPTIN_DAILY_UPDATE`
- Add another new flow 
- Add an event trigger with the value `SCHEDULED_DAILY_EVENT`
- Drag and drop a text reply below the trigger

### 3. Testing
- Tryout the app and enter *subscribe now*. A new subscription will be created

### 4. Deploy to a channel
- Deploy to a channel like Facebook Messenger and try the *subscribe now* 
- Add more training data and complete the flows by adding a *unsubscribe* flow

---

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/flow-ai/example-node-webhook-broadcast)
