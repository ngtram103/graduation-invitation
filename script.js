const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

function openCard() {
  envelope.classList.add("open");

  // phát nhạc
  music.play().catch(() => {
    console.log("Trình duyệt chặn autoplay, cần click lại");
  });

  // pháo hoa
  startFireworks();
}

/* ===== PHÁO HOA ĐƠN GIẢN ===== */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      life: 100
    });
  }

  animate();
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.fillStyle = "yellow";
    ctx.fillRect(p.x, p.y, 3, 3);

    if (p.life <= 0) particles.splice(i, 1);
  });

  if (particles.length > 0) {
    requestAnimationFrame(animate);
  }
}