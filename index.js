require('dotenv').config()

const Slack = require('slack');
const slack = new Slack();

slack.chat.postMessage({
    token: process.env.SLACK_BOT_TOKEN,
    channel: process.env.SLACK_CHANNEL,
    text: '動物園',
    attachments: [{
        callback_id: 'animals_button',
        text: '',
        actions: ['パンダ', 'コアラ', 'タスマニアタイガー', 'ディンゴ', 'タスマニアデビル'].map(v => ({
            type: 'button',
            text: v,
            name: v
        }))
    }]
}).then(console.log).catch(console.error);
