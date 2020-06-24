# Flow.ai Node.js Webhook Broadcast Example

This example project is created using Nodejs and Express. It demonstrates an easy way to store subscribers and broadcast a message each day using a cron worker.

## Pre-requirements

- You'll need a [Flow.ai](https://app.flow.ai) project
- [Heroku](https://heroku.com) account
- Mongodb database

## Getting started

### 1. Installation

- Open the [Flow.ai dashboard](https://app.flow.ai)
- Select actions and create a new [Webhook action](https://flow.ai/docs/actions/webhook)
- Copy and paste the *verify token* from the webhook action settings
- [Deploy the project to Heroku](https://heroku.com/deploy?template=https://github.com/flow-ai/example-node-webhook-broadcast) and paste the *verify token*

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/flow-ai/example-node-webhook-broadcast)

### 2. Create flows

- Return to the [Flow.ai dashboard](https://app.flow.ai)
- Open the flows view and create a new [flow](https://flow.ai/docs/learn/thinking-in-flows)
- Add a [text trigger](https://flow.ai/docs/triggers/text) with the text *subscribe now*
- Drag and drop a new [reply action](https://flow.ai/docs/replies/action) and select the webhook action created in step 1. Enter as action `OPTIN_DAILY_UPDATE`
- Add another flow
- Add an [event trigger](https://flow.ai/docs/triggers/event) with the value `SCHEDULED_DAILY_EVENT`
- Drag and drop a text reply below the trigger

### 3. Testing

- [Tryout](https://flow.ai/docs/learn/testing) the project and by sending the text *subscribe now*. A new subscription will be created

### 4. Deploy to a channel

- Deploy to a channel like [Facebook Messenger](https://flow.ai/docs/integrations/messenger) and try the *subscribe now*
- Add more training data and complete the flows by adding a *unsubscribe* flow
