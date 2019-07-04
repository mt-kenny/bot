require('dotenv').config()
const getAttachments = require('./lib').getAttachments;

const Slack = require('slack');
const slack = new Slack();

const categories = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const message = 'how many in the group?';
const callback_prefix = 'ppl_number_pick_';

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: message,
  attachments: getAttachments(categories, callback_prefix)
}).then(console.log).catch(console.error);
