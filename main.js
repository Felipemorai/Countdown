'use strict';

const formatDigit = (digit) => `0${digit}`.slice(-2);

const update = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const qtdSeconds = time % 60;
    const qtdMinutes = Math.floor((time % (60 * 60)) / 60);
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qtdDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatDigit(qtdSeconds);
    minutes.textContent = formatDigit(qtdMinutes);
    hours.textContent = formatDigit(qtdHours);
    days.textContent = formatDigit(qtdDays);
}

const countDown = (time) => {
    const stopCount = () => clearInterval(id);
    
    const count = () => {
        if (time === 0 ) {
            stopCount();
        }
        update (time);
        time--;
    }
    const id = setInterval(count,1000);
}

const timeLeft = () => {
    const dataEvent = new Date ('2021-08-31 20:00:00');
    const today = Date.now();
    return Math.floor((dataEvent - today) / 1000);
}

countDown(timeLeft());