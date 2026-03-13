$(function () {
  $("#form").submit(function (e) {
    e.preventDefault();

    const username = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: "https://api.freeapi.app/api/v1/users/login",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        username: username,
        password: password,
      }),
      success: function (data) {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "home.html";
      },
      error: function (err) {
        localStorage.setItem("error", JSON.stringify(err));
        window.location.href = "error.html";
      },
    });
  });
});
