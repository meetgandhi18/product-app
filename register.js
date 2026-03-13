$(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const userName = $("#username").val();
    const pass = $("#password").val();
    const role = $("#role").val();
    // console.log(email + " " + userName + " " + pass + " " + role);
    $.ajax({
      url: "https://api.freeapi.app/api/v1/users/register",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: email,
        password: pass,
        role: role,
        username: userName,
      }),
      success: function (data) {
        window.location.href = "login.html";
        console.log(data);
      },
    });
  });
});
