const audio = document.getElementById("bg-music");
const messageEl = document.getElementById("message");

window.addEventListener("DOMContentLoaded", function () {
  audio.volume = 0.3;
  audio.play().catch((e) => {
    console.log("Autoplay prevented. User interaction required.", e);
  });
});

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// 📝 Typewriter message function
function showMessage() {
  messageEl.innerText = "";
  const message = "Wishing you and your loved ones a joyful Hari Raya filled with laughter, warmth, and lots of ketupat! 🌙✨";
  let i = 0;
  const typing = setInterval(() => {
    if (i < message.length) {
      messageEl.innerText += message[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, 40);
}

// 😆 Floating box and movement
function moveAround() {
  const face = document.querySelector('.face-img');
  const floatingBox = document.getElementById('floating-box');

  const randomX = Math.random() * (window.innerWidth - 150);
  const randomY = Math.random() * (window.innerHeight - 150);

  face.style.position = 'absolute';
  face.style.left = randomX + 'px';
  face.style.top = randomY + 'px';

  floatingBox.style.left = (randomX + 80) + 'px';
  floatingBox.style.top = (randomY - 30) + 'px';
  floatingBox.style.display = 'block';

  floatingBox.innerHTML = getRandomMessage();

  triggerConfetti(randomX, randomY);
}

function getRandomMessage() {
  const messages = [
    "Clicking me won't grant you duit Raya... or will it? 🤑",
    "I'm not hiding duit Raya here. Or am I? 🤔",
    "You just tapped my face. Bold move. I like it 😏",
    "If you laugh, you owe me lemang! 🍚",
    "You're officially cooler than a Raya pop-up card 🫶"
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// 🎉 Confetti burst!
function triggerConfetti(x, y) {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${x + Math.random() * 100 - 50}px`;
    confetti.style.top = `${y}px`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
  }
}