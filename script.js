document.addEventListener("DOMContentLoaded", () => {
  const log = document.getElementById("chat-log");
  const input = document.getElementById("chat-input");
  const API_URL = window.API_URL || "http://localhost:5001/chat";

  if (!log || !input) return;

  input.addEventListener("keypress", async e => {
    if (e.key !== "Enter" || !input.value.trim()) return;
    const question = input.value.trim();
    input.value = "";

    // Echo user
    log.innerHTML += `<div><strong>You:</strong> ${question}</div>`;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question })
      });
      const data = await res.json();
      log.innerHTML += `<div><strong>Nick‑bot:</strong> ${data.reply}</div>`;
    } catch (err) {
      log.innerHTML += `<div><em>Error communicating with server.</em></div>`;
    }

    log.scrollTop = log.scrollHeight;
  });
});
