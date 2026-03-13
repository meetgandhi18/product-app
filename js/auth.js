import { api } from "./utils/api.js";
import { redirect, showError } from "./utils/helper.js";
import { getItem, setItem } from "./utils/storage.js";

export async function login(username, password) {
  try {
    $("#login-error").text("");

    // validation
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const response = await api("/users/login", "POST", {
      username, password
    });

    console.log(response);

    if (!response.success) {
      throw new Error(response.message || "Login failed");
    }

    const { user, accessToken, refreshToken } = response.data;

    setItem("user", user);
    setItem("accessToken", accessToken);
    setItem("refreshToken", refreshToken);

    // redirect("home.html");

  } catch (err) {
    console.error("Login error:", err);
    showError("#login-error", err.message || "Something went wrong");
  }
}

export async function register(email, username, password, role) {
  try {
    
    const response = await api("/users/register", "POST", {
      email, username, password, role
    });
    
    if (!response.success) {
      throw new Error(response.message || "Register failed");
    } else {
      window.location.href = "login.html";
    }
    
  } catch (err) {
    console.error("Register error:", err);
    showError("#register-error", err.message || "Something went wrong");
  }
}