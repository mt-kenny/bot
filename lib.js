const MAX_ACTIONS = 5;

const getAttachments = function(list, callbackPrefix) {
  const result = [];
  let count = 0;

  for (let i = 0; i < list.length; i += MAX_ACTIONS) {
    const splitted = list.slice(i, i + MAX_ACTIONS);
    const attachment = {
      callback_id: `${callbackPrefix}${count++}`,
      text: '',
      actions: splitted.map(v => ({
        type: 'button',
        text: v,
        name: v,
        value: v
      }))
    };

    result.push(attachment);
  }

  return result;
}

const getAttachmentsOfCategories = function(list, callbackPrefix, nameKey) {
  const result = [];
  let count = 0;

  for (let i = 0; i < list.length; i += MAX_ACTIONS) {
    const splitted = list.slice(i, i + MAX_ACTIONS);
    const attachment = {
      callback_id: `${callbackPrefix}${count++}`,
      text: '',
      actions: splitted.map(v => ({
        type: 'button',
        text: v[nameKey],
        name: v[nameKey],
        value: v
      }))
    };

    result.push(attachment);
  }

  return result;
}

module.exports = { getAttachments, getAttachmentsOfCategories };