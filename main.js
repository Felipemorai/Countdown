'use strict';

const formatDigit = (digit) => `0${digit}`.slice(-2);

const update = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const qtdSeconds = time % 60;
    const qtdMinutes = time % (60 * 60);

    seconds.textContent = formatDigit(qtdSeconds);
    minutes.textContent = formatDigit(qtdMinutes);
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

countDown(92);