const EventEmitter=require("events");

const tracker=new EventEmitter();

tracker.on("login",(name)=>{
    console.log(`${name} logged in.`);
});

tracker.on("courseRegistration",(course)=>{
    console.log(`Registered for course: ${course}`);
});

tracker.on("notification",(message)=>{
    console.log(`Notification: ${message}`);
});

tracker.on("logout",(name)=>{
    console.log(`${name} logged out.`);
});

tracker.emit("login","Satyam");
tracker.emit("courseRegistration","Full Stack Development");
tracker.emit("notification","Your registration is successful.");
tracker.emit("logout","Satyam");