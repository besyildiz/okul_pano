async function loadData() {
  const res = await fetch("data.json");
  const data = await res.json();

  document.getElementById("mainContent").innerText = data.main;

  let tickerText = data.ticker.join("   🔹   ");
  document.getElementById("ticker").innerText = tickerText;
}

// Saat
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
setInterval(loadData, 10000); // 10 sn'de bir güncelle

loadData();