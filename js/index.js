import '../css/common.css';

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});


//  * Оставшиеся дни:
const days = Math.floor(time / (1000 * 60 * 60 * 24));

//  * Оставшиеся часы:
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//  * Оставшиеся минуты:
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

//  * Оставшиеся секунды:
const secs = Math.floor((time % (1000 * 60)) / 1000);
