
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.currentTime = 0;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('span[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('span[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('span[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('span[data-value="secs"]');
  }

  runTimer() {
    this.timer();
    this.intervalId = setInterval(() => {
      this.timer();
    }, 1000);
  }

  timer() {
    this.currentTime = Date.now();
    const deltaTime = this.targetDate - this.currentTime;

    if (deltaTime < 1000 && deltaTime > 0) {
      this.stopTimer();
    }

    this.updateClock(deltaTime);
  }

  updateClock(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});


timer.runTimer();
