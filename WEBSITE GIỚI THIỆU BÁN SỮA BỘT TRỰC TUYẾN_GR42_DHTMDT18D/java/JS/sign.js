const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  form_container = document.querySelector(".form_container"),
  form_CloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBth = document.querySelector("#login"),
  pwShow = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
form_CloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShow.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form_container.classList.add("active");
});
loginBth.addEventListener("click", (e) => {
  e.preventDefault();
  form_container.classList.remove("active");
});
