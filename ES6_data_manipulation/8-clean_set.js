export default function cleanSet(set, startString) {
  const leftoverStrArr = [];
  for (const str of set.values()) {
    if (startString.length > 0 && str.startsWith(startString)) {
      leftoverStrArr.push(str.slice(startString.length));
    }
  }
  return leftoverStrArr.join('-');
}
