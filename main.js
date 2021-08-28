'use strict';

const update = (time) => {
    const seconds = document.getElementById('seconds');

    seconds.textContent = time;
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

countDown(5);