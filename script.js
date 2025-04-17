document.addEventListener("DOMContentLoaded", () => {
    const log = document.getElementById("chat-log");
    const input = document.getElementById("chat-input");
  
    input.addEventListener("keypress", async e => {
      if (e.key !== "Enter" || !input.value.trim()) return;
      const question = input.value.trim();
      input.value = "";
  
      // Echo user
      log.innerHTML += `<div><strong>You:</strong> ${question}</div>`;
  
      // Call your local Flask API
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question })
      });
      const { reply } = await res.json();
  
      // Echo bot
      log.innerHTML += `<div><strong>Nick‑bot:</strong> ${reply}</div>`;
      log.scrollTop = log.scrollHeight;
    });
  });