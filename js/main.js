import { login, register } from './auth.js';

$("#login-form").on("submit", (e) => {
  e.preventDefault();
  const username = $("#username").val();
  const password = $("#password").val();

  login(username, password);
});

$("#register-form").on("submit", (e) => {
  e.preventDefault();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const role = $("#role").val();

  register(email, username, password, role);
});