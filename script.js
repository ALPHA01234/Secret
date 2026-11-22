const intro = document.getElementById("intro");
const siteContent = document.getElementById("siteContent");
const openSurprise = document.getElementById("openSurprise");
const confettiLayer = document.getElementById("confettiLayer");

function revealSurprise() {
  if (siteContent.classList.contains("revealed")) return;
  intro.classList.add("hide");
  window.setTimeout(() => {
    intro.style.display = "none";
    siteContent.classList.add("revealed");
    siteContent.setAttribute("aria-hidden", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
    celebrate(45);
  }, 650);
}

openSurprise.addEventListener("click", revealSurprise);
openSurprise.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealSurprise();
  }
});

function celebrate(amount = 65) {
  const colors = ["#eaa8c8", "#c5a6ee", "#f5d8e8", "#a88bd2", "#f6c879"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.1 + "s";
    piece.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    piece.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5000);
  }
}

document.getElementById("wishButton").addEventListener("click", () => {
  celebrate(100);
  const button = document.getElementById("wishButton");
  button.innerHTML = "Your wish is on its way ♡";
  button.disabled = true;
  window.setTimeout(() => {
    button.innerHTML = 'Make another wish <span>✧</span>';
    button.disabled = false;
  }, 2600);
});