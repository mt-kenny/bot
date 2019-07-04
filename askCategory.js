require('dotenv').config()
const getAttachments = require('./lib').getAttachments;

const Slack = require('slack');
const slack = new Slack();

const categories = ['パンダ', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル', 'キリン', 'ゾウ'];
const message = 'pick one!';
const callback_prefix = 'category_pick_';

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: message,
  attachments: getAttachments(categories, callback_prefix)
}).then(console.log).catch(console.error);
