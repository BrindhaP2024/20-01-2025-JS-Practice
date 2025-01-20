const promise = new Promise((resolve, reject) => {
    resolve('Well done stage1')
});
const promise1 = new Promise((resolve, reject) => {
    resolve('Well done stage2')
});
const promise2 = new Promise((resolve, reject) => {
    reject('stage3 got rejected!!')
});

promise.then((value) => {
    console.log(value)
    return promise1

})
.then((value) => {
    console.log(value)
    return promise2

})
.catch((error) => {
    console.log(error);
});