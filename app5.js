//  events in nodejs
const events = require('events');

const eventEmitter = new events.EventEmitter();

const screamEventHandler = function () {
    console.log('Someone just screamed! Ahhhhhhhhhhhhhhhhh');
}

const fartEventHandler = function() {
    console.log("Someone just farted! Ewwwwwwwwwwwwwwwwwww");
}

eventEmitter.on('scream', screamEventHandler);
eventEmitter.on('fart', fartEventHandler)

eventEmitter.emit('scream');
eventEmitter.emit('fart');