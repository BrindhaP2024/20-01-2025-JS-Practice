const promise = new Promise((resolve,reject)=>
{
    const random_n = Math.floor(Math.random()*10);

    setTimeout(()=>{
        if (random_n <4){
            resolve('You guessed right')
        }else{
            reject('Try Again!')
        }
    })
});

