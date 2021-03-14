module.exports = function check(str, bracketsConfig) {
  const allBracketsConfig = bracketsConfig.reduce((res, el) => res.concat(el.join('')), []);

  function checkStr(str) {
    let res = str;

    for (let i = 0; i < allBracketsConfig.length; i++) {
      if (str.includes(allBracketsConfig[i])) {
        res = res.replace(allBracketsConfig[i], '');
      }
    }
    if (res === str) {
      return res;
    } else {
      return checkStr(res);
    }
  }

  return checkStr(str) === '' ? true : false;

}

