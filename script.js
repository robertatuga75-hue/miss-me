// ---------- Floating hearts ----------
const heartsContainer = document.getElementById('hearts');
const heartEmojis = ['❤', '💕', '💖', '💗', '💓'];

function spawnHeart() {
  const heart = document.createElement('span');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 6) + 's';
  heart.style.animationDelay = Math.random() * 2 + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}

setInterval(spawnHeart, 400);

// ---------- No button that runs away ----------
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.querySelector('.card');

const noTexts = [
  'No',
  'Are you sure?',
  'Really sure?',
  'Think again...',
  'Last chance...',
  'Surely not?',
  'You might regret this...',
  'Give it another thought...',
  'Are you absolutely certain?',
  'This could be a mistake...',
  'Have a heart...',
  'Don\'t be so cold...',
  'Change of heart?',
  'Wouldn\'t you reconsider?',
  'Is that your final answer?',
  'You\'re breaking my heart 💔'
];

let noCount = 0;

function moveNoButton() {
  // Change text
  if (noCount < noTexts.length) {
    noBtn.textContent = noTexts[noCount];
  }
  noCount++;

  // Grow Yes button
  const scale = Math.min(1 + noCount * 0.15, 3);
  yesBtn.style.transform = `scale(${scale})`;

  // Shrink No button
  const shrink = Math.max(1 - noCount * 0.08, 0.4);
  noBtn.style.transform = `scale(${shrink})`;

  // Move No button randomly within the card
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = Math.random() * maxY - maxY / 2;

  noBtn.style.position = 'relative';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

// On mobile — move on touch
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

// ---------- Yes button ----------
yesBtn.addEventListener('click', () => {
  const celebration = document.getElementById('celebration');
  celebration.classList.add('show');

  // Burst of hearts
  for (let i = 0; i < 50; i++) {
    setTimeout(spawnHeart, i * 30);
  }
});