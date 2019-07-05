require('dotenv').config()

const Slack = require('slack');
const slack = new Slack();
const luckyTxt = "I'm Feeling Lucky";

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: 'Want me to pick a place?',
  attachments: [{
    callback_id: 'feeling_lucky',
    text: '',
    actions: [{
      type: 'button',
      text: luckyTxt,
      name: luckyTxt,
      value: luckyTxt
    }]
  }]
}).then(console.log).catch(console.error);
