const bars = document.getElementById("bars");
const pass = document.getElementById("pass");
const bird = document.getElementById("bird");
let jumps = 0;
let score = 0;

pass.addEventListener("animationiteration", () => {
  let random = -(Math.random() * 300 + 150);
  pass.style.top = `${random}px`;
  score++;
});

setInterval(function () {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumps === 0) {
    bird.style.top = `${birdTop + 3}px`;
  }
  let barsLeft = parseInt(
    window.getComputedStyle(bars).getPropertyValue("left")
  );
  let passTop = parseInt(window.getComputedStyle(pass).getPropertyValue("top"));
  let positiveTop = -(500 - birdTop);
  if (
    birdTop > 480 ||
    (barsLeft < 20 &&
      barsLeft > -50 &&
      (positiveTop < passTop || positiveTop > passTop + 130))
  ) {
    alert(`Game Over: Score ${score - 1}`);
    bird.style.top = `${100}px`;
    score = 0;
  }
}, 10);

function jump() {
  jumps = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(function () {
    let birdTop = parseInt(
      window.getComputedStyle(bird).getPropertyValue("top")
    );
    if (birdTop > 6 && jumpCount < 15) {
      bird.style.top = `${birdTop - 5}px`;
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumps = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
