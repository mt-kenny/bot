require('dotenv').config()

const Slack = require('slack');
const slack = new Slack();

const categories = ['パンダ', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル', 'キリン', 'ゾウ'];
const MAX_ACTIONS = 5;
const message = 'pick one!';

const getAttachments = function(list, divideLength) {
  const result = [];
  let count = 0;

  for (let i = 0; i < list.length; i += divideLength) {
    const splitted = list.slice(i, i + divideLength);
    const attachment = {
      callback_id: `selection_${count++}`,
      text: '',
      actions: splitted.map(v => ({
        type: 'button',
        text: v,
        name: v
      }))
    };

    result.push(attachment);
  }

  return result;
}

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: message,
  attachments: getAttachments(categories, MAX_ACTIONS)
}).then(console.log).catch(console.error);
