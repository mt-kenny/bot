require('dotenv').config()

const Slack = require('slack');
const slack = new Slack();

const allSelections = ['パンダ', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル', 'キリン', 'ゾウ'];
const maxSizeOfEachAction = 5;
const message = 'pick!';

const getAttachments = function(list, divideLength) {
  const result = [];
  let count = 0;

  for (let i = 0; i < list.length; i += divideLength) {
    const splittedList = list.slice(i, i + divideLength);
    const attachment = {
      callback_id: `selection_${count++}`,
      text: '',
      actions: splittedList.map(v => ({
        type: 'button',
        text: v,
        name: v
      }))
    };

    result.push(attachment);
  }

  return result;
}

const attachmentsToUse = getAttachments(allSelections, maxSizeOfEachAction);

slack.chat.postMessage({
  token: process.env.SLACK_BOT_TOKEN,
  channel: process.env.SLACK_CHANNEL,
  text: message,
  attachments: attachmentsToUse
}).then(console.log).catch(console.error);
