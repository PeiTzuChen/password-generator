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

  //--------以下流程以string data type處理---------

  //如果exclude character有輸入, randomCharacter需排除特定字元
  if (excludeChar.length > 0) {
    let randomCharacterAfterExclude = "";

    for (const element of randomCharacter) {
      if (!excludeChar.includes(element)) {
        randomCharacterAfterExclude += element;
      }
    }
    randomCharacter = randomCharacterAfterExclude;
  }

  //得到密碼的長度，產生密碼
  const passwordLength = Number(inputLength);
  let password = "";

  //隨機產生密碼
  for (let i = 0; i < passwordLength; i++) {
    password +=
      randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
  }
  return password;
};
