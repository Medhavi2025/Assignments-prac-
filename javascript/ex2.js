// Q1
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage:
delayedMessage("Hello after 2 seconds", 2000);

// Q2
function countdown(number) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

// Example usage:
countdown(5);
// Q3
function countdownWithCallback(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;

        if (number < 0) {
            clearInterval(intervalId);
            callback();
        }
    }, 1000);
}

// Example usage:
countdownWithCallback(5, () => console.log("Countdown completed!"));

// Q4
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// Example usage:
wait(3000).then(() => console.log("Promise resolved after 3 seconds!"));

// Q5
function countdownPromise(number) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            console.log(number);
            number--;

            if (number < 0) {
                clearInterval(intervalId);
                resolve();
            }
        }, 1000);
    });
}

// Example usage:
countdownPromise(5).then(() => console.log("Countdown completed!"));

// Q6
function delayedLogSequence(messages) {
    let promise = Promise.resolve();
    
    messages.forEach(([message, delay]) => {
        promise = promise.then(() => wait(delay).then(() => console.log(message)));
    });

    return promise;
}

// Example usage:
delayedLogSequence([["Message 1", 1000], ["Message 2", 2000], ["Message 3", 1000]]);

// Q7
async function delayedLogSequenceAsync(messages) {
    for (const [message, delay] of messages) {
        await wait(delay);
        console.log(message);
    }
}

// Example usage:
delayedLogSequenceAsync([["Message 1", 1000], ["Message 2", 2000], ["Message 3", 1000]]);

// Q8
function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Between 1 and 5 seconds
    return wait(randomDelay).then(() => console.log(`${message} after ${randomDelay} ms`));
}

// Example usage:
randomDelayMessage("Random message");

// Q9
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            action();
        }, interval);

        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}

// Example usage:
repeatAction(() => console.log("Repeating action"), 1000, 5000).then(() => console.log("Action completed after 5 seconds"));
