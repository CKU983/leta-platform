document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (data.ok) {
    window.location.href = "/panel.html";

  } else {
    alert("Hatalı giriş");
  }
});
