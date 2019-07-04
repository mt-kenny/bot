const MAX_ACTIONS = 5;

const getAttachments = function(list, callbackPrefix, divideLength = MAX_ACTIONS) {
  const result = [];
  let count = 0;

  for (let i = 0; i < list.length; i += divideLength) {
    const splitted = list.slice(i, i + divideLength);
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

module.exports = { getAttachments };