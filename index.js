require('dotenv').config()

const Slack = require('slack');
const slack = new Slack();

const message = 'zoo selection';
const selections = ['パンダ1', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル']; 
const selections2 = ['パンダ2', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル']; 

slack.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: message,
    attachments: [
      {
        callback_id: 'animals_button',
        text: '',
        actions: selections.map(v => ({
            type: 'button',
            text: v,
            name: v
        }))
      },
      {
        callback_id: 'animals_button2',
        text: '',
        actions: selections2.map(v => ({
            type: 'button',
            text: v,
            name: v
        }))
      }
    ],
}).then(console.log).catch(console.error);
