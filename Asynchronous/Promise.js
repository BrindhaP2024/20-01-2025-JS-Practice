const promise = new Promise((resolve,reject ) => { 
    const allwentwell = false;
    if (allwentwell){
        resolve('Everything seems fine')
    }
    else{
        reject('Oops!Something went wrong')
    }
});
console.log(promise)