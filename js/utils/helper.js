export function redirect(path) {
  window.location.href = path;
}

export function showError(id, message) {
  $(id)
    .text(message)
    .css("color", "red")
    .show();
}