const startBtn = document.getElementById('start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.getElementById('time-list'),
  timeEl = document.getElementById('time'),
  board = document.getElementById('board');

let time = 0,
  score = 0;

const colors = [
  '#FF0000',
  'green',
  'yellow',
  'orange',
  '#39FF14',
  '#0000FF',
  '#FF00C3',
  '#4824FF',
];

startBtn.addEventListener('click', (e) => {
  e.preventDefault();

  screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = +e.target.getAttribute('data-time');
    screens[1].classList.add('up');
    startGame();
    setTime(time);
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircles();
  }
});

function startGame() {
  const interval = setInterval(() => {
    if (time === 0) {
      clearInterval(interval);
      timeEl.parentNode.classList.add('hide');
      board.innerHTML = `
				<h2>Ваш счет: <span class="primary">${score}</span></h2>
			`;
    } else {
      let current = --time;
      if (current < 10) {
        current = `0${current}`;
      }
      setTime(current);
    }
  }, 1000);
  createRandomCircles();
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function createRandomCircles() {
  const circle = document.createElement('div'),
    size = getRandomNumber(10, 60),
    { width, height } = board.getBoundingClientRect(),
    x = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height - size),
    index = Math.floor(Math.random() * colors.length);

  circle.classList.add('circle');
  circle.style.background = colors[index];
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
