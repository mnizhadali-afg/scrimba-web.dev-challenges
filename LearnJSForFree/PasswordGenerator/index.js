const str = `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?'`;
const btn = document.getElementById("generate_password");
let password = document.getElementsByClassName("pwd");

btn.addEventListener("click", () => {
  password.textContent = "";
  for (const p of password) {
    for (let i = 0; i < 20; i++) {
      p.textContent += str.charAt(Math.floor(Math.random() * str.length));
    }
  }
});
