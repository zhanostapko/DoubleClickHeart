const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let clickedTimes = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickedTimes++;
      times.innerHTML = clickedTimes;
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}
