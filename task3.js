console.log("Program started");

process.nextTick(()=>{
    console.log("process.nextTick executed");
});

setTimeout(()=>{
    console.log("setTimeout executed");
},0);

setImmediate(()=>{
    console.log("setImmediate executed");
});

console.log("Program ended");