const form = document.querySelector("form");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");
const warning = document.querySelector(".hint-bar-warning");
const success = document.querySelector(".hint-bar-success");
const input = document.querySelector("#length");

form.addEventListener("submit", function onFormClicked(event) {
  //如果有選 character set 但密碼長度不對，表單不會送出，表單密碼長度進行驗證，關閉先前畫面可能出現的hint-bar-warning or hint-bar-success
  if (
    !form.checkValidity() &&
    (symbol.checked || number.checked || uppercase.checked || lowercase.checked)
  ) {
    event.stopImmediatePropagation();
    event.preventDefault();
    form.classList.add("was-validated");
    if (success) success.remove();
    warning.classList.add("hint-bar-turn-of");
  }

  //如果checkboxes都沒有選到，表單不會送出，關閉先前可能出現的hint-bar-success，跳出hint-bar-warning
  if (
    !(
      symbol.checked ||
      number.checked ||
      uppercase.checked ||
      lowercase.checked
    )
  ) {
    event.stopImmediatePropagation();
    event.preventDefault();
    if (success) success.remove()
    warning.classList.remove("hint-bar-turn-of");
  }
});

//如果密碼輸入長度不對，馬上進行驗證，不需等submit
input.addEventListener("click", (event) => {
  form.classList.add("was-validated");
});
