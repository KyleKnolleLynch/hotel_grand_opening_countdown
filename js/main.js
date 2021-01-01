const countdown = document.querySelector('.countdown');

//  set launch date and time
const launchDate = new Date('Dec 1, 2022 12:00:00').getTime();

//  set update interval
const interval = setInterval(() => {
  //  get date now
  const now = new Date().getTime();

  //  time between now and launchDate
  const timeBetween = launchDate - now;

  //  calculate times
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

  //  display times
  countdown.innerHTML = `
<div>${days}<span>days</span></div>
<div>${hours}<span>hours</span></div>
<div>${mins}<span>minutes</span></div>
<div>${seconds}<span>seconds</span></div>
`;

  //  if launch date passed
  if (timeBetween < 0) {
    clearInterval(interval);
    countdown.style.color = 'rgb(255, 69, 0)';
    countdown.innerHTML = 'Open For Business! <p>Doors Opened Dec, 1 2020</p>';
    countdown.style.display = 'flex';
    countdown.style.flexDirection = 'column';
  }
}, 1000);
