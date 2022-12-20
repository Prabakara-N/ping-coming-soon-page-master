//elements
const emailInputEl = document.getElementById("mail-input");
const errorMsgEl = document.getElementById("error-msg");
const successMsgEl = document.getElementById("success-msg");
const btn = document.getElementById("btn");

//event listneres
btn.addEventListener("click", function () {
  // regax for email
  const regaxEl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let emailId = emailInputEl.value.trim();

  //checking condition
  if (emailId.match(regaxEl)) {
    errorMsgEl.style.display = "none";
    alert(`✔ DONE`);
    emailInputEl.style.border = "1px solid #4f7df3";
  } else {
    errorMsgEl.style.display = "block";
    emailInputEl.style.border = "1px solid orangered";
  }
});
