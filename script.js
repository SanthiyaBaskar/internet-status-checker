const statusText = document.getElementById("status");

function updateStatus() {
  if (navigator.onLine) {
    statusText.textContent = "✅ You are Online";
    statusText.style.color = "green";
  } else {
    statusText.textContent = "❌ You are Offline";
    statusText.style.color = "red";
  }
}

window.addEventListener("load", updateStatus);
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
