const text = "I'm Abdalkarem";
let index = 0;

function type() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  if (index === 0) el.textContent = "";
  el.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(type, 100);
  }
}

window.onload = type;
