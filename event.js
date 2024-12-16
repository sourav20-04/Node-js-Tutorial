// Importing events
const { log } = require('console');
const EventEmitter = require('events');

// Initializing event emitter instances 
const  eventEmitter = new EventEmitter();

const ball1=(msg)=>{
    log("This is the 1st bowl",msg)
}

const ball2=(msg)=>{
    log("This is the 2nd bowl",msg)
}


eventEmitter.on('myEvent',ball1);
eventEmitter.on('myEvent',ball1);
eventEmitter.on('myEvent',ball2);

eventEmitter.removeListener('myEvent',ball1);
eventEmitter.emit('myEvent',"Do the next ball")

// remove can be used before the emit

eventEmitter.removeAllListeners('myEvent');
eventEmitter.emit('myEvent',"Do the next ball");