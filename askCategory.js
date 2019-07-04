if (process.argv.length === 2) {
  console.error('Expected two arguments!');
  process.exit(1);
}

const lang = process.argv[2];
const size = process.argv[3];

const params = {
  en: {
    large: {
      filepath: 'resources/gurunavi/category_large_en.json',
      callback_prefix: 'category_large_pick_',
      name_key: 'category_l_name',
      list_key: 'category_l',
    },
    small: {
      filepath: 'resources/gurunavi/category_small_en.json',
      callback_prefix: 'category_small_pick_',
      name_key: 'category_s_name',
      list_key: 'category_s',
    }
  },
  ja: {
    large: {
      filepath: 'resources/gurunavi/category_large_ja.json',
      callback_prefix: 'category_large_pick_',
      name_key: 'category_l_name',
      list_key: 'category_l',
    },
    small: {
      filepath: 'resources/gurunavi/category_small_ja.json',
      callback_prefix: 'category_small_pick_',
      name_key: 'category_s_name',
      list_key: 'category_s',
    }
  }
}

require('dotenv').config();
const getAttachmentsOfCategories = require('./lib').getAttachmentsOfCategories;
const loadJsonFile = require('load-json-file');

const Slack = require('slack');
const slack = new Slack();

const message = 'pick one!';

(async () => {
  const p = params[lang][size];
  const jsonData = await loadJsonFile(p.filepath);

  slack.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: message,
    attachments: getAttachmentsOfCategories(jsonData[p.list_key], p.callback_prefix, p.name_key)
  }).then(console.log).catch(console.error);
})();
