const wishButton = document.getElementById("wishButton");
const wishResponse = document.getElementById("wishResponse");

wishButton.addEventListener("click", () => {
  wishResponse.textContent = "A little wish, sent with love. May this year be beautiful for you. ♡";
  wishButton.textContent = "Wish sent";
  wishButton.disabled = true;
});
