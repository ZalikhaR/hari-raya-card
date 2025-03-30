// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrSpuMnZBwwBELUkNmxKs2Oog2bDj-RhM",
  authDomain: "rayaguestbook-bb8f3.firebaseapp.com",
  databaseURL: "https://rayaguestbook-bb8f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rayaguestbook-bb8f3",
  storageBucket: "rayaguestbook-bb8f3.firebasestorage.app",
  messagingSenderId: "982396695548",
  appId: "1:982396695548:web:9be9776a8e1c9bc4537879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const guestbookRef = ref(database, "guestbook");

// Send message
document.getElementById("guestbook-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("guest-message").value;
  push(guestbookRef, {
    name,
    message
  });
  this.reset();
});

// Display messages
onValue(guestbookRef, (snapshot) => {
  const messagesContainer = document.getElementById("guestbook-messages");
  messagesContainer.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const entry = childSnapshot.val();
    const div = document.createElement("div");
    div.classList.add("message-entry");
    div.innerHTML = `<strong>${entry.name}:</strong> ${entry.message}`;
    messagesContainer.appendChild(div);
  });
});


const audio = document.getElementById("bg-music");
const messageEl = document.getElementById("message");

window.addEventListener("DOMContentLoaded", function () {
  audio.volume = 0.3;
  audio.play().catch((e) => {
    console.log("Autoplay blocked until user interacts", e);
  });
});

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

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

// 💫 Face movement + floating box + confetti
function moveAround() {
  const face = document.querySelector('.face-img');
  const floatingBox = document.getElementById('floating-box');

  const randomX = Math.random() * (window.innerWidth - 120);
  const randomY = Math.random() * (window.innerHeight - 120);

  face.style.left = randomX + 'px';
  face.style.top = randomY + 'px';

  floatingBox.style.left = (randomX + 60) + 'px';
  floatingBox.style.top = (randomY - 40) + 'px';
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
window.onload = function () {
  showMessage();
};
