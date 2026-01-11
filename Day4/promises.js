// THIS IS NOT SOMETHING THAT IS DESIGNED TO BE TAUGHT QUICKLY, RECOMMENDED TO WATCH A LONG VID FOR THIS ONE DAW

// FAST OVERVIEW ONLY, COZ IT MIGHT BE CONFUSING AND JUST LOOK FOR IN-DEPTH TUTS


// a PROMISE is an object tha represents the eventual completion or failure of an asynchronous operation
// so its used when u dont know how long is something gonna take
// like file operation, writing in disk, sending network request, http request, APIs and so on

const myPromise = new Promise((resolve, reject) => {
    //Asynchronous Operation
    if (false) {
        value = "good"
        resolve(value); //Fullfill the promise (fullfill state)
    } else {
        error = "bad"
        reject(error); //Reject the promise (reject state)
    }
});

// PROMISE HAS 3 STATE, PENDING STATE , FULLFILL STATE , REJECT STATE

// myPromise //Pending state if wla pa sa fullfill or reject

// .then() if the function if its resolve
// .catch() if rejected
// .finally() for clean up code, runs everytime
myPromise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Always and Forever")
})

//SUPER COMMON WHEN WORKING ON LARGE JS PROJECT OR JS FRAMEWORKS



// ---- TO SPEED UP OPERATIONS USING PROMISES ------
const pro1 = Promise.resolve(3)
const pro2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo")); //100 milliseconds
// const pro3 = new Promise((resolve, reject) => setTimeout(reject, 500, "bar")); //500 milliseconds
const pro3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "bar"));
//this runs line by line in total of 600 milliseconds

Promise.all([pro1, pro2, pro3]) // .all() makes all the promises inside the function runs in a parallel line, and pro3 always come
    .then((results) => {
        console.log(results) // this will not run due to pro3 rejecting
    })
    .catch((error) => {
        console.error(error) // "bar"
    });

// WATCH IN-DEPTH KNOWLEDGE ON PROMISE APPLICATION ON WEB DEV OR JS FRAMEWORK