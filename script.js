const weddingDate = new Date("June 15, 2026 18:00:00").getTime();

const timer = setInterval(function() {
  let now = new Date().getTime();
  let diff = weddingDate - now;

  if (diff < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "To‘y boshlandi!";
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " kun " + hours + " soat " + minutes + " daqiqa " + seconds + " soniya";
}, 1000);
