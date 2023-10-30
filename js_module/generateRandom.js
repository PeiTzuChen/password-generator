const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "~!@#$%^&*()_-+=?[]/<";

//4 種 checkbox condition
module.exports = (inputLength, characterType, excludeChar) => {
  const A = characterType.includes("lowercase");
  const B = characterType.includes("uppercase");
  const C = characterType.includes("number");
  const D = characterType.includes("symbol");
  let randomCharacter = "";

  if (A) {
    randomCharacter += lowercaseCharacter;
  }
  if (B) {
    randomCharacter += uppercaseCharacter;
  }
  if (C) {
    randomCharacter += number;
  }
  if (D) {
    randomCharacter += symbol;
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
