'use strict';

const countDown = (time) => {
    const stopCount = () => clearInterval(id);
    
    const count = () => {
        if (time === 0 ) {
            stopCount();
        }
        console.log (time);
        time--;
    }
    const id = setInterval(count,1000);
}

countDown(5);