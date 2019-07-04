require('dotenv').config()
const getAttachments = require('./lib').getAttachments;

const Slack = require('slack');
const slack = new Slack();

const categories = ['en', 'ja'];
const message = 'pick preferred language!';
const callback_prefix = 'language_pick_';

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: message,
  attachments: getAttachments(categories, callback_prefix)
}).then(console.log).catch(console.error);
