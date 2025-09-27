// Simple confetti launcher
function confettiLaunch() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    window.confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    window.confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
