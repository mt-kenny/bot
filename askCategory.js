require('dotenv').config();
const getAttachmentsOfCategories = require('./lib').getAttachmentsOfCategories;
const loadJsonFile = require('load-json-file');

const Slack = require('slack');
const slack = new Slack();

const message = 'pick one!';
const callback_prefix = 'category_pick_';

(async () => {
  const jsonData = await loadJsonFile('resources/gurunavi/category_large_en.json');

  slack.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: message,
    attachments: getAttachmentsOfCategories(jsonData['category_l'], callback_prefix)
  }).then(console.log).catch(console.error);
})();
