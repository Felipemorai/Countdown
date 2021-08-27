'use strict';

const countDown = (time) {
    const count = () => {
        console.log (time);
        time--;
    }
    setInterval(count,1000);
}

countDown(5);