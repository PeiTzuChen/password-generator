const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacter = "1234567890";
const symbolCharacter = "~!@#$%^&*()_-+=?[]/<";

//4 種 checkbox condition
module.exports = (
  inputLength,
  lowercase,
  uppercase,
  number,
  symbol,
  excludeChar
) => {
  let randomCharacter = "";

  if (lowercase === "on") {
    randomCharacter += lowercaseCharacter;
  }
  if (uppercase === "on") {
    randomCharacter += uppercaseCharacter;
  }
  if (number === "on") {
    randomCharacter += numberCharacter;
  }
  if (symbol === "on") {
    randomCharacter += symbolCharacter;
  }

  //如果exclude character有輸入
  if (excludeChar.length > 0) {
    const excludeIndex = [];
    //找出需要排除的字元的index
    for (let i = 0; i < excludeChar.length; i++) {
      for (let j = 0; j < randomCharacter.length; j++) {
        if (excludeChar[i] === randomCharacter[j]) {
          excludeIndex.push(j);
        }
      }
    }

    // index ascending order
    excludeIndex.sort((a, b) => {
      return a - b;
    });

    let randomCharacterAfterExclude = randomCharacter.slice(0, excludeIndex[0]);
    for (let i = 0; i < excludeIndex.length; i++) {
      //擷取剩下需要的字元，組成新的random character table
      randomCharacterAfterExclude += randomCharacter.slice(
        excludeIndex[i] + 1,
        excludeIndex[i + 1]
      );
    }
    randomCharacter = randomCharacterAfterExclude;
  }

  //讀取輸入的長度
  const passwordLength = Number(inputLength);
  let password = "";

  //隨機產生密碼
  for (let i = 0; i < passwordLength; i++) {
    password +=
      randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
  }
  return password;
};
