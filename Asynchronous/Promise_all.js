const promise = new Promise((resolve, reject) => {
    resolve('Well done stage1');
});
const promise1 = new Promise((resolve, reject) => {
    reject('Well done stage2');
});
const promise2 = new Promise((resolve, reject) => {
    resolve('stage3 got rejected!!');
});

Promise.all([promise, promise1, promise2])
    .then((values) => {  //This will not work here
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });
