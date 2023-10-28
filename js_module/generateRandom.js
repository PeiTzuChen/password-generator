const lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "~!@#$%^&*()_-+=?[]/<";
let randomCharacter = "";

module.exports = (inputDataArray) => {
  const A = inputDataArray.characterType.includes("lowercase");
  const B = inputDataArray.characterType.includes("uppercase");
  const C = inputDataArray.characterType.includes("number");
  const D = inputDataArray.characterType.includes("symbol");

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

  const passwordLength = Number(inputDataArray.length);
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password +=
      randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
  }

  return console.log("success");
};
