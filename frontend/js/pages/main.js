const container = document.querySelector("#container");
const loginBtn = document.querySelector("#show-login");
const registerBtn = document.querySelector("#show-register");


const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");

if (container) {
  if (mode === "register") {
    container.classList.remove("login-mode"); 
  } else {
    container.classList.add("login-mode");
  }
}


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("login-mode");
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("login-mode");
});

if (typeof lucide !== "undefined") {
  lucide.createIcons();
}

const formContainer = document.querySelector(".form-container");

formContainer?.addEventListener("click", (event) => {
  const eye = event.target.closest(".eye-icon");
  if (!eye) return;

  const passwordBox = eye.closest(".password-box");
  if (!passwordBox) return;

  const passwordInput = passwordBox.querySelector(
    'input[type="password"], input[type="text"]',
  );
  if (!passwordInput) return;

  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  eye.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    return "Email kiriting";
  }

  if (!emailPattern.test(email.trim())) {
    return "Email formati noto'g'ri";
  }

  return "";
}










// const pageContent = document.querySelector("#page-content");

// async function loadPage(page) {
//   const response = await fetch(`views/${page}-view.html`);

//   const html = await response.text();

//   pageContent.innerHTML = html;
// }

// document.querySelectorAll(".sidebar__link").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();

//     const page = link.dataset.page;

//     loadPage(page);
//   });
// });

// loadPage("dashboard");
