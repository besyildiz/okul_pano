let index = 0;
let dataGlobal = null;

async function loadData() {
  const res = await fetch("data.json?rand=" + Math.random());
  const data = await res.json();
  dataGlobal = data;

  updateSlide();
  updateTicker();
}

function updateSlide() {
  if (!dataGlobal) return;

  let item = dataGlobal.main[index];

  document.getElementById("title").innerText = item.title;
  document.getElementById("text").innerText = item.text;
  document.getElementById("image").src = item.image;

  index++;
  if (index >= dataGlobal.main.length) index = 0;
}

function updateTicker() {
  let tickerText = dataGlobal.ticker.join("   🔹   ");
  document.getElementById("ticker").innerText = tickerText;
}

// Saat
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString("tr-TR");
}

setInterval(updateClock, 1000);
setInterval(updateSlide, 5000);   // 5 sn'de değişir
setInterval(loadData, 15000);     // 15 sn'de veri yeniler

loadData();