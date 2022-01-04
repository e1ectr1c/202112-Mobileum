const delay = require('../utils/delay');

const sum = async (...values) => {

    let result = 0;

    for (const value of values) {
        await delay(1000).then(_ => { result += value });
    }
    return result;
}

const promise = sum(1, 2, 3, 4);

promise.then(result => {
    console.log('promise', promise);
    console.log('result', result);
});

console.log('promise', promise);
console.log('waiting for promise to resolve');
