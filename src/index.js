module.exports = function check(str, bracketsConfig) {
  let brackets = [...str];
  for (let i = 0; i < brackets.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        brackets[i] == bracketsConfig[j][0] &&
        brackets[i + 1] == bracketsConfig[j][1]
      ) {
        brackets.splice(i, 2);
        i -= 2;
      }
    }
  }
  return brackets.length == 0 ? true : false;
};
