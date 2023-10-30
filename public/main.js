const form = document.querySelector("form");
const lowercase = document.querySelector("#lowercase");
const uppercase = document.querySelector("#uppercase");
const symbol = document.querySelector("#symbol");
const number = document.querySelector("#number");
const warning = document.querySelector("#warning");
const success = document.querySelector("#success-password");
const input = document.querySelector("#length");

form.addEventListener("submit", function onFormClicked(event) {
  //如果密碼長度不對，表單不會送出，表單密碼長度進行驗證，關閉先前畫面可能出現的hint bar
  if (
    !form.checkValidity() &&
    (symbol.checked || number.checked || uppercase.checked || lowercase.checked)
  ) {
    event.stopImmediatePropagation();
    event.preventDefault();
    form.classList.add("was-validated");
    success.classList.remove("success-password-show-up");
    success.classList.add("success-password");
    warning.classList.remove("warning-show-up");
    warning.classList.add("warning");
  }

  //如果checkboxes都沒有選到，表單不會送出，關閉先前可能出現的success hint bar出現 warning bar
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
    success.classList.remove("success-password-show-up");
    success.classList.add("success-password");
    warning.classList.add("warning-show-up");
    warning.classList.remove("warning");
  }
});

//如果密碼輸入長度不對，馬上進行驗證，不需等submit
input.addEventListener("click", (event) => {
  form.classList.add("was-validated");
});
