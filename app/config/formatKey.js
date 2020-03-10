const formatKey = (key) => {
  if (!key) {
    throw new Error('Key needs to be defined before you format it');
  }
  const LINE_LENGTH = 64;
  const LINE_BREAK = '\n';
  const beginKey = '-----BEGIN PUBLIC KEY-----';
  const endKey = '-----END PUBLIC KEY-----';

  const sanatizedKey = key.replace(beginKey, '').replace(endKey, '').replace(LINE_BREAK, '');

  const keyArray = sanatizedKey.split('').map((l, i) => {
    const position = i + 1;
    const isLastCharacter = sanatizedKey.length === position;
    if (position % LINE_LENGTH === 0 || isLastCharacter) {
      return l + LINE_BREAK;
    }
    return l;
  });

  return `${beginKey}\n${keyArray.join('')}${endKey}\n`;
};

module.exports = formatKey;
