// Importing events
const { log } = require('console');
const EventEmitter = require('events');
const { listeners } = require('process');

// Initializing event emitter instances 
const  eventEmitter1 = new EventEmitter();
const  eventEmitter2 = new EventEmitter();

log("Default max listner for eventemitter1 is :",eventEmitter1.getMaxListeners());
log("Default max listner for eventemitter2 is :",eventEmitter2.getMaxListeners())



// now  set a coustom listner count for all eventemiter 

EventEmitter.setMaxListeners(2);

//  It just show the  number of event listeners 

log("Default max listner for eventemitter1 is :",eventEmitter1.getMaxListeners());
log("Default max listner for eventemitter2 is :",eventEmitter2.getMaxListeners())


// only for eventEmitter1
eventEmitter1.setMaxListeners(1);
log("Default max listner for eventemitter1 is :",eventEmitter1.getMaxListeners());


const ball1=(msg)=>{
    log("This is the 1st bowl",msg)
}

const ball2=(msg)=>{
    log("This is the 2nd bowl",msg)
}


// Calling the event listeners 

for(let i=0;i<1;i++){
    eventEmitter1.addListener('myEvent1',ball1)
}


for(let i=0;i<3;i++){
    eventEmitter2.addListener('myEvent2',ball2)
}





// Emitting the eventEmitter1 and eventEmitter2 
eventEmitter1.emit('myEvent1',"Event Occurred");
eventEmitter2.emit('myEvent2',"Event Occurred");
