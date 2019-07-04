const Slack = require('slack');
const slack = new Slack();

slack.chat.postMessage({
    token: 'xoxb-684681784485-684686562709-DQ9HAgq3qMVsfwoZpOhTHiXq',
    channel: 'CL6PZ2B7Y',
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
